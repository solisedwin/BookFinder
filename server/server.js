const express = require('express')
const mongoose = require('mongoose')
//Bypass Same-origin policy
const cors = require('cors')

const path = require('path')
const app = express();

require('dotenv').config(
  {
    path: '.env.db'
  }
)

mongoose.connect(`${process.env.MONGODB_URI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => console.log('Connected to Mongodb database.'),
    err => console.log(`Error connecting to database.Error: ${err}`)
  )

app.use(cors())

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')))

const registerRouter = require('./routes/register.ts')

app.use('/register', registerRouter)

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
  console.log(`Server is running on port: ${app.get('port')}`);
})
