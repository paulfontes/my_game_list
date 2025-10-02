import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { reviewsService } from "../services/ReviewsService.js";

export class ReviewsController extends BaseController {
    constructor() {
        super('api/reviews')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createReview)
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