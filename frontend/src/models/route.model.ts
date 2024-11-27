import { Leg } from "./leg.model";

export interface Route {
    distance: number;
    duration: string;
    legs: Leg[];
}