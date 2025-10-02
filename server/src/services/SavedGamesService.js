import { Error } from "mongoose"
import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"



class SavedGamesService {
    async getGames(profileId) {
        const getGames = await dbContext.SavedGames.find({ creatorId: profileId }).populate('creator', 'name picture')
        return getGames
    }
    async editSavedGame(userInfo, gameData) {
        const editedGame = await dbContext.SavedGames.findOne({ gameId: gameData.gameId, creatorId: userInfo.id })
        if (editedGame == null) {
            throw new Error('That game does not exist')
        }
        editedGame.type = gameData.type
        await editedGame.save()
        return editedGame
    }
    async saveGame(gameData, userInfo) {
        const getGame = await dbContext.SavedGames.find({ gameId: gameData.gameId, creatorId: userInfo.id })
        if (getGame.length != 0) {
            throw new Error('This game has already been saved!')
        }
        const savedGame = await dbContext.SavedGames.create(gameData)
        savedGame.populate('creator', 'name picture')
        return savedGame
    }
}





export const savedGamesService = new SavedGamesService()


