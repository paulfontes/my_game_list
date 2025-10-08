import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /** @type {import('./models/Game.js').Game[]} user info from the database*/
  games: [],

  nextPage: null,
  previousPage: null,
  totalPages: 1,
  currentPage: 1,
  /** @type {import('./models/Game.js').Game} user info from the database*/
  activeGame: null
})

