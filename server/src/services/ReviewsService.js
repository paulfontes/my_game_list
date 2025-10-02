import { dbContext } from "../db/DbContext.js"

class ReviewsService {

    async getReviewsByGameId(gameData) {
        const reviews = await dbContext.Reviews.find({ gameId: gameData.gameId })
        return reviews
    }

    async createReview(reviewData) {
        const newReview = await dbContext.Reviews.create(reviewData)
        return newReview
    }

}

export const reviewsService = new ReviewsService()