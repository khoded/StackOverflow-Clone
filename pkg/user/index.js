const userDelivery = require('./delivery/http/routes/routes');
const repo = require('./repository/repo');
const usecase = require('./usecase/usecase');

//register service
const repoInstance = new repo();
const usecaseInstance = new usecase(repoInstance);
userDelivery.userDelivery(usecaseInstance)

module.exports = {
    userService: userDelivery.api
}