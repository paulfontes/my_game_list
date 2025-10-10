import { AppState } from "@/AppState.js"
import { Game } from "@/models/Game.js"
import { logger } from "@/utils/Logger.js"
import axios from "axios"



const gameApi = axios.create({
    baseURL: "https://api.rawg.io",
    timeout: 5000
})



class GamesService {
    async getActiveGame(gameId) {
        AppState.activeGame = null
        const response = await gameApi.get(`/api/games/${gameId}?key=b0d5907476a4461cadee527e4b2f0bdc`)
        AppState.activeGame = new Game(response.data)
    }
    async changePage(pageNumber, num) {
        logger.log(pageNumber)
        if (pageNumber.toString() == 'https://api.rawg.io/api/games?key=b0d5907476a4461cadee527e4b2f0bdc&page_1=&page_size=40&page_size=40') {
            const response = await gameApi.get(`https://api.rawg.io/api/games?key=b0d5907476a4461cadee527e4b2f0bdc&page_1=&page_size=40&page_size=40`)
            this.gameHandler(response)
            AppState.currentPage = AppState.currentPage + num
        }
        const response = await gameApi.get(`/api/games?key=b0d5907476a4461cadee527e4b2f0bdc&page_size=40&page=${pageNumber}`)
        this.gameHandler(response)
        AppState.currentPage = AppState.currentPage + num
        if (AppState.currentPage > AppState.totalPages) {
            AppState.currentPage = AppState.totalPages
            return
        }
        if (AppState.currentPage < 1) {
            AppState.currentPage = 1
            return
        }
    }
    async getGames() {
        AppState.games = []
        AppState.currentPage = 1
        const response = await gameApi.get('/api/games?key=b0d5907476a4461cadee527e4b2f0bdc&page_1&page_size=40')
        this.gameHandler(response)

    }

    async gameHandler(response) {
        const games = response.data.results.map((game) => new Game(game))
        AppState.games = games
        AppState.nextPage = response.data.next
        AppState.previousPage = response.data.previous
        const gameNumber = response.data.count
        AppState.totalPages = Math.ceil(gameNumber / 40)
        // logger.log(AppState.nextPage, AppState.previousPage);
    }

}
export const gamesService = new GamesService()