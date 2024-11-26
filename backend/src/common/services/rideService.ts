import { prisma } from "../../db/prisma";
import { DriverMinDTO } from "../DTO/driverMinDTO";
import { DriverOptionDTO } from "../DTO/driverOptionDTO";
import { LocationDTO } from "../DTO/locationDTO";
import { RideEstimateDTO } from "../DTO/rideEstimateDTO";
import { RideMinDTO } from "../DTO/rideMinDTO";
import { RiderConfirmeDTO } from "../DTO/riderConfirmDTO";
import { RidesHistoryDTO } from "../DTO/ridesHistoryDTO";
import { driverNotFoundError, invalidDataError, invalidDistanceError, ridersNotFoundError } from "../middlewares/errorHandler";
import { fetchRouteFromGoogleMaps } from "../utils/requests/googleMapsAPI";

export const calculateEstimate = async (customer_id: string, origin: string, destination: string, next: Function) => {
    try {
        switch (true) {
            case !customer_id || !origin || !destination:
                return next(
                    invalidDataError("User ID, origin, and destination cannot be empty.")
                );
            case origin === destination:
                return next(
                    invalidDataError("Origin and destination cannot be the same.")
                );
        };

        const routeData = await fetchRouteFromGoogleMaps(origin, destination, next) ?? { distance: 0, origin: { lat: 0, lng: 0 }, destination: { lat: 0, lng: 0 }, duration: 0, routeResponse: {} };

        const driversData = await prisma.driver.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                vehicle: true,
                review: true,
                taxValue: true,
                minKm: true,
            },
        });

        const availableDrivers: DriverOptionDTO[] = driversData
            .filter(driver => routeData.distance >= driver.minKm)
            .map(driver => {
                return {
                    id: driver.id,
                    name: driver.name,
                    description: driver.description,
                    vehicle: driver.vehicle,
                    review: { rating: driver.review.rating, comment: driver.review.comment },
                    value: parseFloat((routeData.distance * driver.taxValue).toFixed(2)),
                };
            })
            .sort((a, b) => a.value - b.value);

        const response = new RideEstimateDTO(
            new LocationDTO(routeData?.origin.lat, routeData?.origin.lng),
            new LocationDTO(routeData?.destination.lat, routeData?.destination.lng),
            routeData.distance,
            routeData.duration,
            availableDrivers,
            routeData?.routeResponse
        );
        return response;

    } catch (error) {
        next(error);
    }
};

export const saveRide = async (rideData: RiderConfirmeDTO, next: Function) => {
    try {
        const customer_id = rideData.getCustomerId();
        const origin = rideData.getOrigin();
        const destination = rideData.getDestination();
        const duration = rideData.getDuration();
        const distance = rideData.getDistance();
        const driver = rideData.getDriver();

        if (!customer_id || !origin || !destination) {
            return next(
                invalidDataError("User ID, origin, and destination cannot be empty.")
            );
        }

        if (origin === destination) {
            return next(
                invalidDataError("Origin and destination cannot be the same.")
            );
        }

        const retrievedDriver = await prisma.driver.findUnique({
            where: { id: driver.id },
        });

        if (!retrievedDriver) {
            return next(driverNotFoundError("A valid driver must be provided."));
        }

        if (distance < retrievedDriver.minKm) {
            return next(
                invalidDistanceError(
                    `Distance minimal distance of the driver is ${retrievedDriver.minKm} km.`
                )
            );
        }

        const savedRide = await prisma.ride.create({
            data: {
                customer: {
                    connect: { id: parseInt(customer_id) },
                },
                origin,
                destination,
                duration,
                distance,
                driver: {
                    connect: { id: retrievedDriver.id },
                },
                value: rideData.getValue(),
            },
        });

        return savedRide;
    } catch (error) {
        next(error);
    }
};


export const fetchRides = async (customer_id: string, next: Function, driver_id?: string) => {
    try {
        if (!customer_id) {

            return next(invalidDataError("ID user cannot be empty."));
        }

        if (driver_id) {
            const driverExists = await prisma.driver.findUnique({ where: { id: parseInt(driver_id) } });
            if (!driverExists) {
                return next(driverNotFoundError("A valid driver must be provided."))
            }
        }

        const rides = await prisma.ride.findMany({
            where: {
                customerId: parseInt(customer_id),
                ...(driver_id && { driverId: parseInt(driver_id) })
            },
            orderBy: { date: "desc" },
            include: {
                driver: true
            }
        });

        if (!rides.length) {
            return next(ridersNotFoundError("No rides found for the specified criteria."));
        }

        const rideMinDTOs = rides.map(ride => {
            let driverDTO = new DriverMinDTO(
                ride.driver.id,
                ride.driver.name
            );

            return new RideMinDTO(
                ride.id,
                ride.date,
                ride.origin,
                ride.destination,
                ride.duration,
                ride.distance,
                driverDTO,
                ride.value
            )
        });

        const ridesHistoryDTO = new RidesHistoryDTO(customer_id, rideMinDTOs);

        return ridesHistoryDTO;
    } catch (error) {
        console.log(error);
        next(error)
    }
};
