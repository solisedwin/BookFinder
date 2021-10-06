
//import { Request, Response, NextFunction } from 'express';
const { DuplicateData } = require('./../errors/UserFacingErrors')

const bcrypt = require('bcrypt');
const User = require('./../models/user.model.ts');

exports.isUsernameTaken = async (req, res, next) => {
    const username = req.body.username
    try {
        const userData = await User.findOne({ 'username': username })
    }
    catch (error) {
        return next(error)
    }

    if (userData !== null || userData.length > 0) {
        return next(new DuplicateData('Username already exists. Please choose a different one'))
    }

    let registerUserForm = { 'username': username }
    res.locals.registerUserForm = registerUserForm;
    next();
}


exports.hashPassword = async (req, res, next) => {
    const password = req.body.password
    const saltRounds = 10
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    } catch (error) {
        return next(error);
    }
    res.locals.registerUserForm.hashedPassword = hashedPassword;
    next()
}

exports.saveUser = async (req, res, next) => {
    const registerUserForm = res.locals.registerUserForm;
    // --------  Check if exact property names and files mathch model. Does it work ? 
    const registerUser = User(registerUserForm);
    try {
        const createdUser = await registerUser.save();
    } catch (error) {
        return next(error);
    }
    return res.status(201).json({
        'message': 'Successfully registered as a new user!',
        'result': result
    });
}

