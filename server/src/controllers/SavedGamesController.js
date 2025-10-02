import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { response } from "express";



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

        } catch (error) {
            next(error)
        }
    }



}








