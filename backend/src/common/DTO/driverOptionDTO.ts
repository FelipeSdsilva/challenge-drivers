import { ReviewDTO } from "./reviewDTO";

export class DriverOptionDTO {

    id: number;
    name: string;
    description: string;
    vehicle: string;
    review: ReviewDTO;
    value: number;

    constructor(
        id: number,
        name: string,
        description: string,
        vehicle: string,
        review: ReviewDTO,
        value: number
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.vehicle = vehicle;
        this.review = review;
        this.value = value;
    }
}
