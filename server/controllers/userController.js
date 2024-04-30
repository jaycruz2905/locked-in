const User = require('../models/userModel');
// const Session = require('../models/sessionModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log('-----> userController.createUser START');
    const { username, password } = req.body;

    if (!password || !username) {
      throw new Error('Require username and password input!');
    }
    
    //check if user already exists
    const foundUser = await User.findOne({ username: username });
    if (foundUser) {
        console.log('---> Found existing user with username');
        return next({
            log: `userController.createUser - error creating user; ERROR: User with username already found`,
            status: 400,
            message: { err: 'Error in userController.createUser; Check server logs' }
        });
    }

    //if no user found, create
    await User.create({ username: username, password: password});
    console.log(`---> User successfully created! Username: ${username} Password: ${password}`);
    console.log('-----> userController.createUser END');
    return next();
  }
  catch (error) {
    return next({
      log: 'Error occured in userController.createUser',
      status: 400,
      message: { err: `userController.createUser: ${error}` }
    });
  }
};

module.exports = userController;