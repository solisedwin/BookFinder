
const express = require('express')
const router = express.Router()
const UserController = require('./../controllers/User.controller.cjs');


router.post('/', UserController.isUsernameTaken, UserController.hashPassword, UserController.saveUser);

//module.exports = router;
export default router;
