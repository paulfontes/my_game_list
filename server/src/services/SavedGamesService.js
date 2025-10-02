import { dbContext } from "../db/DbContext.js"



class SavedGamesService {
    async saveGame(gameData, userInfo) {
        const savedGame = await dbContext.SavedGames.create(gameData)
        savedGame.populate('creator', 'name picture')
        return savedGame
    }
}





export const savedGamesService = new SavedGamesService()


