const express = require('express')
const mongoose = require('mongoose')
var morgan = require('morgan')

//Bypass Same-origin policy
const cors = require('cors')

const path = require('path')
const app = express();

const { UserFacingError } = require('./errors/BaseErrors')
const logger = require('./logger/logger')

require('dotenv').config(
  {
    path: '.env.db'
  }
)

mongoose.connect(`${process.env.MONGODB_URI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(
    () => console.log('Connected to Mongodb database. Yeah!! '),
    err => console.log(`Error connecting to database.Error: ${err}`)
  ).catch(e => console.log('Catching database connection error. ' + e))

app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')))
app.use(morgan("combined", { stream: logger.stream.write }));

const registerRouter = require('./routes/register.ts')

app.use('/register', registerRouter)
app.set('port', process.env.PORT || 3001)

//Global HTTP Request and Response. And Logging. 
app.use(function (err, req, res, next) {
  //Set Allow Origin for development on localhost. 
  if (process.env.NODE_ENV === "development") {
    req.headers['Access-Control-Allow-Origin'] = 'http://localhost:300'
  }

  if (err) {
    logger.error(err);
    //logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
  } else {
    logger.info(`${req.method} -  ${req.originalUrl} - ${req.ip}`);
  }
  next(err)
})

app.listen(app.get('port'), () => {
  console.log(`Server is running on port: ${app.get('port')}`);
})
