const mongoose = require('mongoose')
module.exports = {
   async connectMongodb() {
       try {
          await mongoose.connect( process.env.mongo_url || 'mongodb://localhost:27017/stackOverflow',{ useNewUrlParser: true })
          console.log("db connected")
       } catch (error) {
           console.log(error)
       }
   }
}