export class ReviewDTO {
    
    rating: number;
    comment: string;

    constructor(rating: number, comment: string) {
        this.rating = rating;
        this.comment = comment;
    }
}