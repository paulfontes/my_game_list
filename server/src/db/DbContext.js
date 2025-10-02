import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { SavedGameSchema } from '../models/SavedGame.js';
import { ReviewSchema } from '../models/Review.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  SavedGames = mongoose.model('SavedGame', SavedGameSchema);
  Reviews = mongoose.model('Review', ReviewSchema)
}

export const dbContext = new DbContext()
