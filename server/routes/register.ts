'use strict';
const express = require('express')
const router = express.Router()

router.post('/', function (req, res) {
    res.send('<h2>Register function with just slash</h2>')
})

module.exports = router ;
