import { DriverOptionDTO } from "./driverOptionDTO";
import { LocationDTO } from "./locationDTO";

export class RideEstimateDTO {

    origin: LocationDTO;
    destination: LocationDTO;
    distance: number;
    duration: string;
    options: DriverOptionDTO[];
    routeResponse: object;

    constructor(
        origin: LocationDTO,
        destination: LocationDTO,
        distance: number,
        duration: string,
        options: DriverOptionDTO[],
        routeResponse: object
    ) {
        this.origin = origin;
        this.destination = destination;
        this.distance = distance;
        this.duration = duration;
        this.options = options;
        this.routeResponse = routeResponse;
    }
}