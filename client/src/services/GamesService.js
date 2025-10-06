import { AppState } from "@/AppState.js"
import { Game } from "@/models/Game.js"
import { logger } from "@/utils/Logger.js"
import axios from "axios"



const gameApi = axios.create({
    baseURL: "https://api.rawg.io",
    timeout: 5000
})



class GamesService {
    async changePage(pageNumber) {
        const response = await gameApi.get(`${pageNumber}`)
        this.gameHandler(response)
        const currentPage = pageNumber.slice(72, 73)
        console.log(currentPage)
        AppState.currentPage = currentPage
    }
    async getGames() {
        const response = await gameApi.get('/api/games?key=b0d5907476a4461cadee527e4b2f0bdc&page_size=40&page_1')
        this.gameHandler(response)

    }

    async gameHandler(response) {
        const games = response.data.results.map((game) => new Game(game))
        AppState.games = games
        AppState.nextPage = response.data.next
        AppState.previousPage = response.data.previous
        logger.log(AppState.nextPage, AppState.previousPage);
    }

}
export const gamesService = new GamesService()