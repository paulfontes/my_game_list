import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { reviewsService } from "../services/ReviewsService.js";
import { request } from "express";

export class ReviewsController extends BaseController {
    constructor() {
        super('api/reviews')
        this.router
            .get('/:gameId', this.getReviewsByGameId)
            .get('/:profileId', this.getReviewsByProfileId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .put('', this.changeLikedStatus)
            .post('', this.createReview)
            .delete('/:reviewId', this.deleteReview)
    }

    async getReviewsByGameId(request, response, next) {
        try {
            const gameData = request.params.gameId
            const reviews = await reviewsService.getReviewsByGameId(gameData)
            response.send(reviews)
        }
        catch (error) {
            next(error);
        }
    }

    async getReviewsByProfileId(request, response, next) {
        try {
            const profileId = request.params.profileId
            const reviews = await reviewsService.getReviewsByProfileId(profileId)
            response.send(reviews)
        }
        catch (error) {
            next(error);
        }
    }
    async changeLikedStatus(request, response, next) {
        try {
            const userInfo = request.userInfo
            const reviewLike = request.body
            reviewLike.creatorId = userInfo.id
            const review = await reviewsService.changeLikedStatus(reviewLike, userInfo)
            response.send(review)
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

    async deleteReview(request, response, next) {
        try {
            const userInfo = request.userInfo
            const reviewId = request.params.reviewId
            const deletedReview = await reviewsService.deleteReview(reviewId, userInfo)
            response.send('review has perished')
        }
        catch (error) {
            next(error);
        }
    }
}