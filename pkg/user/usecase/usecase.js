class userUsecase {
    constructor(repo) {
      this.repo = repo;
  
    }
  
    async createUser(payload) {
      try {
        const data = await this.repo.createUser(payload)
        return data
      } catch (error) {
        throw error
      }
    }
    async userLogin(payload) {
      try {
        const data = await this.repo.userLogin(payload)
        return data
      } catch (error) {
        throw error
      }
    }
}  
module.exports = userUsecase;