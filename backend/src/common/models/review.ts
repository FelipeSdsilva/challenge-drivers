export class Review {

    private id: number;
    private rating: number;
    private comment: string;

    constructor();

    constructor(id: number, rating: number, comment: string);

    constructor(id?: number, rating?: number, comment?: string) {
        this.id = id || 0;
        this.rating = rating || 0;
        this.comment = comment || '';
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getRating(): number {
        return this.rating;
    }

    public setRating(rating: number): void {
        this.rating = rating;
    }


    public getComment(): string {
        return this.comment;
    }

    public setComment(comment: string): void {
        this.comment = comment;
    }
}