import { Schema } from "mongoose";

export const SavedGameSchema = new Schema(
    {
        creatorId: { type: Schema.ObjectId, required: true },
        gameId: { type: String, required: true },
        type: { type: String, enum: ['wished', 'liked', 'played'], required: true },
        gameTitle: { type: String, required: true, minLength: 1, maxLength: 300 },
        coverArt: { type: String, required: true, minLength: 1, maxLength: 500 },
    },
    {
        timestamps: true, toJSON: { virtuals: true }, versionKey: false
    }
)

SavedGameSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true,

})