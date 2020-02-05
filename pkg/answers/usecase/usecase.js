class answerUsecase {
    constructor(repo) {
      this.repo = repo;
  
    }
  
    async createAnswer(payload) {
      try {
        const data = await this.repo.createAnswer(payload)
        return data
      } catch (error) {
        throw error
      }
    }

    async viewAnswer(questionId) {
      try {
        const data = await this.repo.viewAnswer(questionId)
        return data
      } catch (error) {
        throw error
      }
    }
    
    async voteAnswer(vote, answerId, userId) {
      try {
        const data = await this.repo.voteAnswer(vote, answerId,userId)
        return data
      } catch (error) {
        throw error
      }
    }
}  
module.exports = answerUsecase;