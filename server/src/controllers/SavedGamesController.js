import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { response } from "express";
import { savedGamesService } from "../services/SavedGamesService.js";



export class SavedGamesController extends BaseController {
    constructor() {
        super('api/savedgames')
        this.router
            .get('')
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.saveGame)
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








