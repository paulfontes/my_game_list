import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { SavedGameSchema } from '../models/SavedGame.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  SavedGames = mongoose.model('SavedGame', SavedGameSchema);
}

export const dbContext = new DbContext()
