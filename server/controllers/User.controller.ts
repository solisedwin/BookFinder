
//import { Request, Response, NextFunction } from 'express';
const bcrypt = require('bcrypt');
const User = require('./../models/user.model.ts')

exports.isUsernameTaken = async (req, res, next) => {
    const username = req.body.username

    User.findOne(
        { 'username': username }
    )
        .then(data => {
            //Username already exists in database. Client needs to register under a different username
            if (data === null || data.length > 0) {
                res.status(500).json(
                    {
                        //Create error object from another class/file, pass error object instead ??
                        errorType: 'Database query',
                        errorView: 'Inline Message',
                        errorMsg: 'Username already exists in the database. Choose another username.'
                    })
            }
        }).catch((err) => console.log(`Check similar username process failed. Error:  ' + ${err}`))

    let user = {}
    user.userName = username;
    res.locals.user = user;

    next();
}


exports.hashPassword = async (req, res, next) => {

    const password = req.body.password
    const saltRounds = 10

    const hashedPassword = await bcrypt.hash(password, saltRounds, function (error, hash) {
        if (error) {
            res.status(500).json(
                {
                    errorType: 'Hashing',
                    errorView: 'Page',
                    errorMsg: 'There has been an internal error. Please try again in a few mintues. Our apologies.'
                })
        }
        return hash
    });
    res.locals.user.hashedPassword = hashedPassword;
    next()
}

exports.saveUser = async (req, res, next) => {
    const user = res.locals.user;

    const newUser = User(user);

    await newUser.save().then(result => {
        if (!result) {
            return res.status(500).json({
                'message': 'Could not save new user into the database';
            });
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
