const answerDelivery = require('./delivery/http/routes/routes');
const repo = require('./repository/repo');
const usecase = require('./usecase/usecase');

//register service
const repoInstance = new repo();
const usecaseInstance = new usecase(repoInstance);
answerDelivery.answerDelivery(usecaseInstance)

module.exports = {
    answerService: answerDelivery.api
}