const handlers = require('../handlers/handlers');
const auth = require('../middleware/auth');
const express = require('express');
const api = express.Router();

const userDelivery = (usecase) => {
    const handler = new handlers(usecase)

    api.post('/v1/users/signup', (req,res)=>{
        handler.createUser(req,res)
    })
    api.post('v1/users/signin', auth, (req,res)=>{
        handler.userLogin(req,res)
    })
}
module.exports ={
    userDelivery,
    api
}