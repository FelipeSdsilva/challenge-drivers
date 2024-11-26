import { RideMinDTO } from "./rideMinDTO";

export class RidesHistoryDTO {
    customer_id: string;
    rides: RideMinDTO[]

    constructor(customer_id: string, rides: RideMinDTO[]) {
        this.customer_id = customer_id;
        this.rides = rides;
    }
}