import { dbContext } from "../db/DbContext.js"



class SavedGamesService {
    getGames(creatorId) {
        throw new Error("Method not implemented.")
    }
    async saveGame(gameData, userInfo) {
        const savedGame = await dbContext.SavedGames.create(gameData)
        savedGame.populate('creator', 'name picture')
        return savedGame
    }
}





export const savedGamesService = new SavedGamesService()


