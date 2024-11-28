export interface HistoricRider {
    id: number;
    date: string;
    origin: string;
    destination: string;
    duration: string;
    distance: number;
    driver: {
        id: number;
        name: string;
    };
    value: number;
}