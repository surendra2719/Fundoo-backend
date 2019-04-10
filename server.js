/*****************************************************************************************
 * @purpose : it provides the entry point to backend operations  
 * @author  : Surendra      
 * @file    : server.js
 * @overview: These file may contain all connections what we required in backend operations
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')
const router = require('./routes/routes')
// const responseTime = require('response-time')
// const axios = require('axios');
// const redis = require('redis');
/**
 * create an express app
 */
const app = express();
/**
 *  parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: true }))
/**
 *  parse requests of content-type - application/json
 */
app.use(bodyParser.json())
/**
 * define a simple route 
 */
app.use(expressValidator())
app.use('/', router)
require('dotenv').config()
/**
 * Configuring the database
 */
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
/**
 * Connecting to the database
 */
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.json({ "server": "is connected" });
});
/**
 * listen for requests
 */
app.listen(1995, () => {
    console.log("Server is listening on port 1995");
});
/**
 * exporting the app to test file
 */
// const client = redis.createClient();

// // Print redis errors to the console
// client.on('error', (err) => {
//   console.log("Error " + err);
// });

// // use response-time as a middleware
// app.use(responseTime());


// // create an api/search route
// app.get('/api/search', (req, res) => {
//   // Extract the query from url and trim trailing spaces
//   const query = (req.query.query).trim();
//   // Build the Wikipedia API url
//   const searchUrl = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${query}`;
//   // Try fetching the result from Redis first in case we have it cached
//   return client.get(`wikipedia:${query}`, (err, result) => {
//     // If that key exist in Redis store
//     if (result) {
//       const resultJSON = JSON.parse(result);
//       return res.status(200).json(resultJSON);
//     } else { // Key does not exist in Redis store
//       // Fetch directly from Wikipedia API
//       return axios.get(searchUrl)
//         .then(response => {
//           const responseJSON = response.data;
//           // Save the Wikipedia API response in Redis store
//           client.setex(`wikipedia:${query}`, 3600, JSON.stringify({ source: 'Redis Cache', ...responseJSON, }));
//           // Send JSON response to client
//           return res.status(200).json({ source: 'Wikipedia API', ...responseJSON, });
//         })
//         .catch(err => {
//           return res.json(err);
//         });
//     }
//   });
// });

module.exports = app;
