import { DriverMinDTO } from "./driverMinDTO";

export class RideMinDTO {

    id: number;
    date: Date;
    origin: string;
    destination: string;
    duration: string;
    distance: number;
    driver: DriverMinDTO;
    value: number;

    constructor(
        id: number,
        date: Date,
        origin: string,
        destination: string,
        duration: string,
        distance: number,
        driver: DriverMinDTO,
        value: number
    ) {
        this.id = id;
        this.date = date;
        this.origin = origin;
        this.destination = destination;
        this.duration = duration;
        this.distance = distance;
        this.driver = driver;
        this.value = value;
    }

}