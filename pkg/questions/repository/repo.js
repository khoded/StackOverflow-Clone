const questionModel = require('../../../model/questions/question');
const mongoose = require('mongoose');

class questionRepository {
    async askQuestion(payload){
        try {
            await questionModel.create(payload)
            return payload
        } catch (error) {
            throw error
        }
    }

    async viewQuestion(){
        try {
            const data = await questionModel.find();
            return data;
          } catch (error) {
            throw error
        }
    }

    async voteQuestion(vote, questionId, userId,){
        try {
            if (vote === 'upvote') {
                await questionModel.update({ _id:  mongoose.Types.ObjectId(questionId)},{$push: {upVote: {userId}}})
            }
            await questionModel.update({ _id:  mongoose.Types.ObjectId(questionId)},{$push: {downVote: {userId}}})
            const data = "question voted"
            return data
        } catch (error) {
            throw error
        }
    }
    async search(payload) {
        try {
          const data = await questionModel.find(payload)
          return data
        } catch (error) {
          throw error
        }
      }
}
module.exports = questionRepository