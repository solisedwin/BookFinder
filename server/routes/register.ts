
const express = require('express')
const router = express.Router()
let User = require('./../routes/ ');


require('dotenv').config(
  {
    path: `${__dirname}/../../.env`
  }
)


router.post('/', function (req, res) {

  res.send('<h2>Register function with just slash</h2>')
})

module.exports = router;
