import { prisma } from "../../db/prisma";
import { DriverOptionDTO } from "../DTO/driverOptionDTO";
import { LocationDTO } from "../DTO/locationDTO";
import { RideEstimateDTO } from "../DTO/rideEstimateDTO";
import { RiderConfirmeDTO } from "../DTO/riderConfirmDTO";
import { driverNotFoundError, invalidDataError, invalidDistanceError } from "../middlewares/errorHandler";
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

        const routeData = await fetchRouteFromGoogleMaps(origin, destination, next);

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
            new LocationDTO(routeData.origin.lat, routeData.origin.lng),
            new LocationDTO(routeData.destination.lat, routeData.destination.lng),
            routeData.distance,
            routeData.duration,
            availableDrivers,
            routeData.routeResponse
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


export const fetchRides = async (customer_id: string, driver_id?: string) => {

    return [];
};
