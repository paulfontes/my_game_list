import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class ReviewsService {

    async deleteReview(reviewData, userInfo) {
        const deletedReview = await dbContext.Reviews.findOne({ _id: reviewData._id })
        if (deletedReview.creatorId != userInfo) {
            throw new Forbidden('suffer for eternity')
        }
        const deleteReview = await dbContext.Reviews.deleteOne({ _id: deletedReview._id })
    }

    async getReviewsByGameId(gameData) {
        const reviews = await dbContext.Reviews.find({ gameId: gameData.gameId }).populate('creator', 'name picture')
        return reviews
    }

    async getReviewsByProfileId(profileId) {
        const reviews = await dbContext.Reviews.find({ creatorId: profileId }).populate('creator', 'name picture')
        return reviews
    }

    async createReview(reviewData) {
        const newReview = await dbContext.Reviews.create(reviewData)
        newReview.populate('creator', 'name picture')
        return newReview
    }

}

export const reviewsService = new ReviewsService()