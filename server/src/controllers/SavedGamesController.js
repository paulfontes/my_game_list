import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { response } from "express";
import { savedGamesService } from "../services/SavedGamesService.js";



export class SavedGamesController extends BaseController {
    constructor() {
        super('api/savedgames')
        this.router
            .get('/:profileId', this.getSavedGames)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.saveGame)
    }

    async getSavedGames(request, response, next) {
        try {
            const creatorId = request.params.profileId
            const getGames = await savedGamesService.getGames(creatorId)
            response.send(getGames)
        }
        catch (error) {
            next(error);
        }
    }


    async saveGame(request, response, next) {
        try {
            const gameData = request.body
            const userInfo = request.userInfo
            gameData.creatorId = userInfo.id
            const savedGame = await savedGamesService.saveGame(gameData, userInfo)
            response.send(savedGame)
        } catch (error) {
            next(error)
        }
    }



}








