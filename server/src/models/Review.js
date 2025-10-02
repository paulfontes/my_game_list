import { Schema } from "mongoose";

export const ReviewSchema = new Schema({
    creatorId: { type: Schema.ObjectId, required: true },
    gameId: { type: String, required: true, minLength: 1, maxLength: 100 },
    body: { type: String, required: true, minLength: 1, maxLength: 5000 },
    likes: { type: Number, required: true, min: 0, max: 10000, default: 0 },
    dislikes: { type: Number, required: true, min: 0, max: 10000, default: 0 },
    story: { type: Number, required: true, min: 1, max: 5 },
    gameplay: { type: Number, required: true, min: 1, max: 5 },
    graphics: { type: Number, required: true, min: 1, max: 5 },
    replayAbility: { type: Number, required: true, min: 1, max: 5 },

},
    {
        timestamps: true, toJSON: { virtuals: true }, versionKey: false
    },

)

ReviewSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true,
}
)