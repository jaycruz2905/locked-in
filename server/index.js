const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT;
// PORT = 3000;
const MONGO_URI = 'mongodb+srv://jerelmcruz0:pkDZ4vcPsGvkj4E5@locked-in.kcuuvmx.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    dbName: 'Reinforcement',
  })
    .then(() => console.log('-----> Connected to Mongo DB.'))
    .catch(err => console.log(err));

    
app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use('/', express.static(path.resolve(__dirname, '../dist')));


app.get('/',
    (req, res) => {
        return res.status(200).sendFile(path.join(__dirname, '../../dist/index.html'));
    }
);

app.post('/signup', 
  userController.createUser,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);


app.use((err, req, res, next) => {
    const defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 500,
      message: { err: "An error occurred" },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`...listening on port ${PORT}`);
});

// app.listen(port, () => {
//   console.log(`...listening on port ${port}`);
// });