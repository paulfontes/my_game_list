import { dbContext } from "../db/DbContext.js"

class ReviewsService {
    async createReview(reviewData) {
        const newReview = await dbContext.Reviews.create(reviewData)
        return newReview
    }

}

export const reviewsService = new ReviewsService()