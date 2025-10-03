export class Game {
    constructor(data) {
        this.id = data.id
        this.title = data.name
        this.genre = data.genres
        this.tags = data.tags
        this.platform = data.platforms
        this.releaseDate = data.released
        this.stores = data.stores
        this.artwork = data.background_image
        this.coverArt = data.background_image
        this.metaCritic = data.metacritic
        this.userRating = data.userRating
        this.siteRating = data.rating
        this.ageRating = data.esrb_rating
    }
}