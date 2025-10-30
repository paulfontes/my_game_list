import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"


// [{userId: oid, value: 1|-1|0}]


class ReviewsService {

    /**
     * Adds and removes as needed from likes and dislikes based on reviewLike.liked boolean
     * @param {{ _id: string, liked: boolean }} reviewLike 
     * @param {{ id:  any }} userInfo 
     */
    async toggleLikedStatus(reviewLike, userInfo) {
        const review = await dbContext.Reviews.findById(reviewLike._id)
        if (!review) { throw new BadRequest("Invalid Review Id") }

        const hasLiked = review.likes.findIndex((l) => l.toString() == userInfo.id)
        const hasDisliked = review.dislikes.findIndex((l) => l.toString() == userInfo.id)

        if (reviewLike.liked && hasLiked == -1) {
            review.likes.push(userInfo.id)
            if (hasDisliked != -1) {
                review.dislikes.splice(hasDisliked, 1)
            }
        }

        if (!reviewLike.liked && hasDisliked == -1) {
            review.dislikes.push(userInfo.id)
            if (hasLiked != -1) {
                review.likes.splice(hasLiked, 1)
            }
        }

        review.markModified('likes')
        review.markModified('dislikes')

        await review.save()
        return review
    }

    async changeLikedStatus(reviewLike, userInfo) {
        const safetyCheck = await dbContext.Reviews.findOne({ _id: reviewLike._id })
        if (safetyCheck == null) {
            throw new Error('This review does not exist')
        }
        if (!reviewLike.liked) {
            const status = await dbContext.Reviews.findOne({ _id: reviewLike._id })
            const statusArray = status.dislikes.includes(reviewLike.creatorId)
            if (!statusArray) {

                status.dislikes.push(reviewLike.creatorId)
                const likeCheck = status.likes.includes(reviewLike.creatorId)
                if (likeCheck) {
                    const index = status.likes.findIndex((l) => l._id == userInfo._id)
                    status.likes.splice(index, 1)
                    status.save()
                    return status.populate('creator', 'name picture')
                }
                status.save()
                return status.populate('creator', 'name picture')
            }
            const index = status.dislikes.findIndex((l) => l._id == userInfo._id)
            status.dislikes.splice(index, 1)
            status.save()
            return status.populate('creator', 'name picture')
        }
        const status = await dbContext.Reviews.findOne({ _id: reviewLike._id })
        const statusArray = status.likes.includes(reviewLike.creatorId)
        if (!statusArray) {
            status.likes.push(reviewLike.creatorId)
            const dislikeCheck = status.dislikes.includes(reviewLike.creatorId)
            if (dislikeCheck) {
                const index = status.dislikes.findIndex((l) => l._id == userInfo._id)
                status.dislikes.splice(index, 1)
                status.save()
                return status.populate('creator', 'name picture')
            }
            status.save()
            return status.populate('creator', 'name picture')
        }
        const index = status.likes.findIndex((l) => l._id == userInfo._id)
        status.likes.splice(index, 1)
        status.save()
        return status.populate('creator', 'name picture')
    }
    async deleteReview(reviewId, userInfo) {
        const deletedReview = await dbContext.Reviews.findById({ _id: reviewId })
        if (deletedReview.creatorId != userInfo.id) {
            throw new Forbidden('suffer for eternity')
        }
        const deleteReview = await dbContext.Reviews.deleteOne({ _id: deletedReview._id })
    }
    async getReviewsByGameId(gameData) {
        const reviews = await dbContext.Reviews.find({ gameId: gameData }).populate('creator', 'name picture')
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