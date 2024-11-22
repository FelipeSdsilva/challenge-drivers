import { Review } from './review';

export class Driver {

  private id: number;
  private name: string;
  private description: string;
  private vehicle: string;
  private review: Review;
  private taxValue: number;
  private minKm: number;

  constructor();

  constructor(
    id: number,
    name: string,
    description: string,
    vehicle: string,
    review: Review,
    taxValue: number,
    minKm: number
  );


  constructor(
    id?: number,
    name?: string,
    description?: string,
    vehicle?: string,
    review?: Review,
    taxValue?: number,
    minKm?: number
  ) {
    this.id = id || 0;
    this.name = name || '';
    this.description = description || '';
    this.vehicle = vehicle || '';
    this.review = review || new Review();
    this.taxValue = taxValue || 0;
    this.minKm = minKm || 0;
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

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getVehicle(): string {
    return this.vehicle;
  }

  public setVehicle(vehicle: string): void {
    this.vehicle = vehicle;
  }

  public getReview(): Review {
    return this.review;
  }

  public setReview(review: Review): void {
    this.review = review;
  }

  public getTaxValue(): number {
    return this.taxValue;
  }

  public setTaxValue(taxValue: number): void {
    this.taxValue = taxValue;
  }

  public getMinKm(): number {
    return this.minKm;
  }

  public setMinKm(minKm: number): void {
    this.minKm = minKm;
  }
}
