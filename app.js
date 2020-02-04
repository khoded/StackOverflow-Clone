const express = require('express');
const db = require('.config/db/db');
const bodyParser = require('body-parser');
const cors = require('cors');


//intialize db
db.connectMongodb();

//connect tools
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


//connect services


//start app
app.listen(process.env.PORT || 8000, ()=>{
    console.log('server running..............')
})