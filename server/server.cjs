const express = require('express')
const mongoose = require('mongoose')
//Bypass Same-origin policy
const cors = require('cors')

const path = require('path')
const app = express();

const { UserFacingError } = require('./errors/UserFacingErrors')
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

const registerRouter = require('./routes/register.ts')

app.use('/register', registerRouter)

//Global Express Error Controller
app.use(function (err, req, res, next) {
  if (err instanceof UserFacingError) {
    res.status(err.statusCode).send(err.message)
  } else {
    res.sendStatus(500)
  }
  logger.error(err, {
    'Request: ': req,
    'Response: ': res
  })
});

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
  console.log(`Server is running on port: ${app.get('port')}`);
})
