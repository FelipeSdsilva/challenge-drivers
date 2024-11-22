import { Ride } from "./ride";

export class Customer {

    private id: number;
    private name: string;
    private rides!: Ride[];


    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getRides(): Ride[] {
        return this.rides;
    }
}