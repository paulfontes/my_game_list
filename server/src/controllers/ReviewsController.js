import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { reviewsService } from "../services/ReviewsService.js";

export class ReviewsController extends BaseController {
    constructor() {
        super('api/reviews')
        this.router
            .get('', this.getReviewsByGameId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createReview)
    }

    async getReviewsByGameId(request, response, next) {
        try {
            const gameData = request.body
            const reviews = await reviewsService.getReviewsByGameId(gameData)
            response.send(reviews)
        }
        catch (error) {
            next(error);
        }
    }

    async createReview(request, response, next) {
        try {
            const reviewData = request.body
            const userInfo = request.userInfo
            reviewData.creatorId = userInfo.id
            const newReview = await reviewsService.createReview(reviewData)
            response.send(newReview)
        }
        catch (error) {
            next(error);
        }
    }
}