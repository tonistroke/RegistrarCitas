const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'auth-token, Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const uri =
  'mongodb+srv://toni:1234@cluster0.wi9ojnj.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connectado');
  })
  .catch((err) => console.log(err));

app.use(bodyParser.json());

//routes
app.get('/', (res, req) => {
  res.send('yay home page');
});

const CitasRoute = require('./routes/Citas');
app.use('/citas', CitasRoute);

// start server
app.listen(3000, () => {
  console.log('Listening at port 3000');
});
