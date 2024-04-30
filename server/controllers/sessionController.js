const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.createSession = async (req, res, next) => {
  try {
    console.log('-----> sessionController START');
    const { ssid } = req.cookies;
    if(!ssid) throw new Error('No ssid cookie found');

    const foundDoc = await Session.findOne( { cookieId: req.cookies.ssid } );
    if (foundDoc) {
      console.log('---> Found existing session');
      res.locals.userStatus = { signedIn: true };
      return next({
        log: `sessionController.createSession - error creating session; ERROR: Session already found`,
        status: 400,
        message: { err: 'Error in sessionController.createSession; Check server logs' }
      });
    }

    await Session.create({ cookieId: ssid });
    console.log('---> Session created');
    console.log('------> sessionController END');
    return next();

    console.log('-----> sessionController END');
  } catch (err) {
    return next({
      log: `sessionController.createSession - error creating session; ERROR: ${err}`,
      status: 400,
      message: { err: 'Error in sessionController.createSession; Check server logs' }
    });
  }
};

module.exports = sessionController;