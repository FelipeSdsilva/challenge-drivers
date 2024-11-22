import { Driver } from "./driver";
import { Customer } from "./curstomer";

export class Ride {

    private id: number;
    private customer: Customer;
    private origin: string;
    private destination: string;
    private distance: number;
    private duration: string;
    private driver: Driver;
    private value: number;
    private date: Date;

    constructor(
        id: number,
        customer: Customer,
        origin: string,
        destination: string,
        distance: number,
        duration: string,
        driver: Driver,
        value: number,
        date: Date
    ) {
        this.id = id;
        this.customer = customer;
        this.origin = origin;
        this.destination = destination;
        this.distance = distance;
        this.duration = duration;
        this.driver = driver;
        this.value = value;
        this.date = date;
    }


    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getCustomer(): Customer {
        return this.customer;
    }

    public setCustomer(customer: Customer): void {
        this.customer = customer;
    }

    public getOrigin(): string {
        return this.origin;
    }

    public setOrigin(origin: string): void {
        this.origin = origin;
    }

    public getDestination(): string {
        return this.destination;
    }

    public setDestination(destination: string): void {
        this.destination = destination;
    }

    public getDistance(): number {
        return this.distance;
    }

    public setDistance(distance: number): void {
        this.distance = distance;
    }

    public getDuration(): string {
        return this.duration;
    }

    public setDuration(duration: string): void {
        this.duration = duration;
    }

    public getDriver(): Driver {
        return this.driver;
    }

    public setDriver(driver: Driver): void {
        this.driver = driver;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getDate(): Date {
        return this.date;
    }

    public setDate(date: Date): void {
        this.date = date;
    }

}