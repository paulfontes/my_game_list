import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional properties do so here
    bio: { type: String, minLength: 1, maxLength: 500 },
    coverImg: { type: String, minLength: 1, maxLength: 500 },
    favGameName: { type: String, minLength: 1, maxLength: 300 },
    favGameImg: { type: String, minLength: 1, maxLength: 500 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

