
//import { Request, Response, NextFunction } from 'express';
const DatabaseError = require('./../Errors/CustomErrorHandling.cjs');
const HashingError = require('./../Errors/CustomErrorHandling.cjs');
const bcrypt = require('bcrypt');
const User = require('./../models/user.model.ts');

exports.isUsernameTaken = async (req, res, next) => {
    const username = req.body.username

    User.findOne({ 'username': username })
        .then(result => {
            if (data === null || data.length > 0) {
                return res.json(
                    new DatabaseError('Username already exists for another account. Choose a differnt username.', 'Register Page')
                )
            }
            return result
        })
        .catch(err => console.log(`Check similar username process failed. Error:  ' + ${err}`))

    let registerUser = { 'username': username }
    res.locals.registerUser = registerUser;
    next();
}


exports.hashPassword = async (req, res, next) => {
    const password = req.body.password
    const saltRounds = 10

    const hashedPassword = await bcrypt.hash(password, saltRounds, function (error, hash) {
        if (error) {
            return res.json(
                new HashingError('Error in saving passsword. Try to enter password again. Remember that most special characters are not allowed and other character encodings are not allowed.',
                    'Register Page')
            )
        }
        return hash
    }).catch(err => console.log('Hashing error: ' + err))
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
        return res.status(201).json({
            'message': 'Successfully registered as new user!',
            'result': result
        });
    })
        .catch(err => {
            return res.status(500).json({
                'error': err
            })
        })


}
