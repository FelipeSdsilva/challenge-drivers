import { DriverMinDTO } from "./driverMinDTO";

export class RiderConfirmeDTO {

    private customer_id: string;
    private origin: string;
    private destination: string;
    private duration: string;
    private distance: number;
    private driver: DriverMinDTO;
    private value: number;

    constructor(
        customer_id: string,
        origin: string,
        destination: string,
        duration: string,
        distance: number,
        driver: DriverMinDTO,
        value: number
    ) {
        this.customer_id = customer_id;
        this.origin = origin;
        this.destination = destination;
        this.duration = duration;
        this.distance = distance;
        this.driver = driver;
        this.value = value;
    }

    getCustomerId() {
        return this.customer_id;
    }

    getOrigin() {
        return this.origin;
    }

    
    getDestination() {
        return this.destination;
    }
    
    getDuration() {
        return this.duration;
    }
    
    getDistance() {
        return this.distance;
    }

    getDriver() {
        return this.driver;
    }

    getValue() {
        return this.value;
    }
}