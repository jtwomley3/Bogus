import express from 'express';
import logger from '../utilities/logger';
// import requestPromise from 'request-promise';

const Router = express.Router();

Router.route('/myRoute')
  .get(myRoute);

async function myRoute(req, res) {
  try {
    // const response = await requestPromise.get(
    //   "http://putyouractualurlhere.com/", {
    //     headers: { "Content-Type": "application/json" }
    //   }
    // );
    // res.json(JSON.parse(response));
    res.json({
      message: "This is a response"
    });
  } catch (error) {
    logger.error(error);
    res.status(error.statusCode || 404).json({
      message: "Error performing your request"
    });
  }
}

export default Router;
