import { AppState } from "@/AppState.js"
import { Game } from "@/models/Game.js"
import { logger } from "@/utils/Logger.js"
import axios from "axios"



const gameApi = axios.create({
    baseURL: "https://api.rawg.io",
    timeout: 5000
})



class GamesService {
    async getGames() {
        const response = await gameApi.get('/api/games?key=b0d5907476a4461cadee527e4b2f0bdc&page_size=40')
        const games = response.data.results.map((game) => new Game(game))
        AppState.games = games
    }

}
export const gamesService = new GamesService()