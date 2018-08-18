import "babel-polyfill";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import sampleRouter from './routes/sampleRoutes';
import logger from './utilities/logger';

dotenv.config();

const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
// app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname, '../'))); // needs to match path of assets in dist folder

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET", "POST");
  next();
});

/* Routes */
app.use('/api/sample', sampleRouter);

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '.', '../index.html'));
});

/* Start the Node Server */
const port = process.env.NODE_ENV === 'development' ? 4000 : process.env.PORT;

app.listen(port, function () {
  logger.info(`App listening on port ${port}`);
});
