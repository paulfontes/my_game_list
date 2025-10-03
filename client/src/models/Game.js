export class Game {
    constructor(data) {
        this.id = data.id
        this.title = data.name
        this.genre = data.genres.name
        this.tags = data.tags
        this.platform = data.parent_platform
        this.releaseDate = data.released
        this.stores = data.stores
        this.artwork = data.background_image
        this.coverArt = data.background_image
        this.metaCritic = data.metacritic
        this.userRating = data.userRating
        this.siteRating = data.rating
        this.requirements = data.requirements_en.minimum
        this.ageRating = data.esrb_rating.name
    }
}