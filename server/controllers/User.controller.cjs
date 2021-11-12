
const { DuplicateData } = require('./../errors/UserFacingErrors')
const bcrypt = require('bcrypt');
const User = require('./../models/user.model.ts');

exports.isUsernameTaken = async (req, res, next) => {
    const username = req.body.username
    try {
        const userData = await User.findOne({ 'username': username }).exec();
        if (userData !== null) {
            throw new DuplicateData('Username already exists. Please choose a different one')
        }
    }
    catch (error) {
        return next(error)
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
        res.locals.registerUserForm.password = hashedPassword;
    } catch (error) {
        return next(error);
    }
    next()
}

exports.saveUser = async (req, res, next) => {
    const registerUserForm = res.locals.registerUserForm;
    const registerUser = User(registerUserForm);
    try {
        const createdUser = await registerUser.save();
    } catch (error) {
        return next(error);
    }
    return res.status(201).json({
        'message': 'Successfully registered as a new user!'
    });
}

