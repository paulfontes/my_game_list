import { AppState } from '../AppState.js'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class AccountService {
  async updateAccount(profileData) {
    const response = await api.put('/account', profileData)
    const account = new Account(response.data)
    AppState.account = account
    logger.log(account)

  }
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async favoriteGame(activeGameData) {
    const response = await api.put('/account', activeGameData)
    const account = new Account(response.data)
    AppState.account = account
    logger.log(AppState.account)
  }
}

export const accountService = new AccountService()
