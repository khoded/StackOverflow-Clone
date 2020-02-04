class questionUsecase {
    constructor(repo) {
      this.repo = repo;
  
    }
  
    async askQuestion(payload) {
      try {
        const data = await this.repo.askQuestion(payload)
        return data
      } catch (error) {
        throw error
      }
    }
    async viewQuestion(payload) {
      try {
        const data = await this.repo.viewQuestion(payload)
        return data
      } catch (error) {
        throw error
      }
    }
}  
module.exports = userUsecase;