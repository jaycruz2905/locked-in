const User = require('../models/userModel');

const cookieController = {};

cookieController.setSSIDCookie = async (req, res, next) => {
  try {
    console.log('-----> cookieController.setSSIDCookie START');
    const { username } = req.body;

    const foundUser = await User.findOne({ username: username });
    const userId = foundUser._id.toString();
    if (foundUser) {
      console.log('---> Found existing user', foundUser);
      console.log('---> user _id:', userId);
      await res.cookie('ssid', userId, {httpOnly: true});
      req.cookies.ssid = userId;
      console.log('---> SSID cookie set! SSID Cookie: ', userId);
    } else {
      return next({
        log: `cookieController.setSSIDCookie - user not found`,
        status: 400,
        message: { err: 'Error in cookieController.setSSIDCookie. Check server logs' }
      });
    }

    console.log('-----> cookieController.setSSIDCookie END');
    return next();
  } catch(err) {
    return next({
      log: `cookieController.setSSIDCookie - error setting cookie; ERROR: ${err}`,
      status: 400,
      message: { err: 'Error in cookieController.setSSIDCookie. Check server logs' }
    });
  }

};

module.exports = cookieController;