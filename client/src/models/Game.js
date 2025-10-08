export class Game {
    constructor(data) {
        this.id = data.id
        this.title = data.name
        this.genre = data.genres
        this.tags = data.tags
        this.platforms = data.platforms
        this.releaseDate = data.released
        this.stores = data.stores
        this.coverArt = data.background_image
        this.artwork = data.background_image_additional
        this.metaCritic = data.metacritic
        this.userRating = data.userRating
        this.siteRating = data.rating
        this.ageRating = data.esrb_rating

    }
}