'use strict';

import { Request, Response, NextFunction } from 'express';
const bcrypt = require('bcrypt');

const User = require('./../models/user.model')

exports.isUsernameTaken = async (req: Request, res: Response, next: NextFunction) => {
    const username: string = req.body.username

    User.findOne(
        { 'username': username }
    )
        .then((data: string | any[] | null) => {
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
        }).catch((err: any) => console.log(`Check similar username process failed. Error:  ' + ${err}`))

    next();
}


exports.hashPassword = async (req: Request, res: Response, next: NextFunction) => {

    const password: string = req.body.password
    const saltRounds: Number = 10

    const hashedPassword = await bcrypt.hash(password, saltRounds, function (error: any, hash: any) {
        if (error) {
            res.status(500).json(
                {
                    errorType: 'Hashing',
                    errorView: 'Page',
                    errorMsg: 'There has been an internal error. Please try again in a few mintues. Our apologies.'
                })
            return hash
        }

        res.locals.hashedPassword = hashedPassword


    });


    return;

}