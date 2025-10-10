import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Review } from "@/models/Review.js"




class ReviewsService {
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

}









export const reviewsService = new ReviewsService()




