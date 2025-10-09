import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"




class ReviewsService {
    async createReview(reviewData) {
        const response = await api.post('api/reviews', reviewData)
        logger.log(response)
    }

}









export const reviewsService = new ReviewsService()




