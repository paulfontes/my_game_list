import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Review } from "@/models/Review.js"




class ReviewsService {


    async like(likeData) {
        const response = await api.put(`api/reviews`, likeData)
        logger.log(response)
    }


    async getReviews(gameId) {
        AppState.reviews = []
        const response = await api.get(`api/reviews/${gameId}`)
        const reviews = response.data.map((review) => new Review(review))
        AppState.reviews = reviews
        logger.log(AppState.reviews)
    }
    async createReview(reviewData) {
        const response = await api.post('api/reviews', reviewData)
        logger.log(response)
    }

    async deleteReview(reviewId) {
        logger.log(reviewId)
        const response = await api.delete(`api/reviews/${reviewId}`)
        const index = AppState.reviews.findIndex((r) => r.id == reviewId)
        AppState.reviews.splice(index, 1)
    }
}









export const reviewsService = new ReviewsService()




