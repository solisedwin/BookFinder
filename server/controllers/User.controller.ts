
//import { Request, Response, NextFunction } from 'express';
import { DatabaseError } from './../Errors/CustomErrorHandling'
import { HashingError } from './../Errors/CustomErrorHandling'
const bcrypt = require('bcrypt');
const User = require('./../models/user.model.ts')

exports.isUsernameTaken = async (req, res, next) => {
    const username = req.body.username

    User.findOne({ 'username': username })
        .then(data => {
            if (data === null || data.length > 0) {
                res.json(
                    new DatabaseError('Username already exists for another account. Choose a differnt username.', 'Register Page')
                )
            }
        }).catch(err => console.log(`Check similar username process failed. Error:  ' + ${err}`))

    let registerUser = { 'username': username }
    res.locals.registerUser = registerUser;
    next();
}


exports.hashPassword = async (req, res, next) => {

    const password = req.body.password
    const saltRounds = 10

    const hashedPassword = await bcrypt.hash(password, saltRounds, function (error, hash) {
        if (error) {
            res.json(
                new HashingError('Error in saving passsword. Try to enter password again. Remember that most special characters are not allowed and other character encodings are not allowed.',
                    'Register Page')
            )
        }
        return hash
    });
    res.locals.registerUser.hashedPassword = hashedPassword;
    next()
}

exports.saveUser = async (req, res, next) => {
    const registerUser = res.locals.registerUser;
    const newUser = User(registerUser);

    await newUser.save().then(result => {
        if (!result) {
            return res.json(
                new DatabaseError('Error in trying to save username to database. Try again in 5 mintues.', 'Register Page')
            );
        }
        res.status(201).json({
            'message': 'New User was created !',
            'result': result
        });
    }).catch(err => {
        res.status(500).json({
            'error': err
        })
    })


}
