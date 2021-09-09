
const express = require('express')
const router = express.Router()
const UserController = require('./../controllers/User.controller.cjs');

require('dotenv').config(
  {
    path: `${__dirname}/../../.env`
  }
)

router.post('/', UserController.isUsernameTaken, UserController.hashPassword, UserController.saveUser);

module.exports = router;
