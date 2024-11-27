import { DriverOption } from "./driveOption.model";
import { LocationPoint } from "./locationPoint.model";
import { RouteResponse } from "./routeResponse.model";

export interface LocationState {
    origin: LocationPoint;
    destination: LocationPoint;
    options: DriverOption[];
    routeResponse: RouteResponse;
    customer_id: string;
    origin_name: string;
    destination_name: string;
}
