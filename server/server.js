const express = require('express')
const mongoose = require('mongoose')
//Bypass Same-origin policy
const cors = require('cors')

const path = require('path')
const app = express();


require('dotenv').config()
console.log(process.env)

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
     if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
});


//app.use(express.bodyParser());
app.use(express.json());


app.use(express.static(path.join(__dirname, 'dist')))

/*
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
*/

const registerRouter = require('./routes/register.ts')

app.use('/register', registerRouter)

app.set('port',process.env.PORT || 3001)
app.listen(app.get('port') , () => {
    console.log(`Server is running on port: ${app.get('port')}`);
})
