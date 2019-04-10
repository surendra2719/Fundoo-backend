/*****************************************************************************************
 * @purpose : it will provides authentication
 * @author  : Surendra      
 * @file    : user.Controllers.js
 * @overview: These file may contain various operations for authenticating the generating token
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
/**
 * Defining the userService,util and sentMail through const
 */
const userService = require('../services/user.services')
const util = require('../util/token')
const sentMail = require('../Middleware/sendmail')
const express = require('express');
const responseTime = require('response-time')
const redis = require('redis');
exports.registration = (req, res) => {
    req.check('firstName', "Firstname should contain atleast five characters and it should not be empty ").isLength({ min: 5 })
    req.check('lastName', "Lastname should contain atleast five characters and it should not be empty ").isLength({ min: 5 })
    req.check('email', "ivalid email").isEmail()
    req.check('password', "password must be atleat five characters  and it should not be empty").isLength({ min: 5 })
    // var err = req.validationErrors();
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors;
        res.status(500).send(responseResult);
    }
    else {
        try {
            /**
            * Creating responseResult object
            */
            var responseResult = {}
            /**
             * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
             */
            userService.registration(req.body, (err, result) => {
                /**
                 * checking the error with if condition and sending status
                 */

                if (err) {
                    responseResult.suceses = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult)
                }
                else {
                    /**
                     * checking the result with else condition and sending status
                     */
                    responseResult.suceses = true;
                    responseResult.result = result;
                    res.status(200).send(responseResult);
                }
            })
        }
        catch (err) {
            console.log('errors in controllers', err);
        }
    }
}
/**
 * Acessesing the login and passing the parameters request body from router and providing call back function with parametrs result and error
 */
exports.login = (req, res) => {
    req.check('email', 'invalid email').isEmail()
    req.check('password', 'passwword must be atleat five characters  and it should not be empty').isLength({ min: 5 })
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors
        res.status(500).send(responseResult);
    }
    else {
        try {


            const app = express();

            // create and connect redis client to local instance.
            const client = redis.createClient();

            // Print redis errors to the console
            client.on('error', (err) => {
                console.log("Error " + err);
            });

            app.use(responseTime());

            // Extract the query from url and trim trailing spaces
            // const query = (req.body.email+req.body._id).trim();
            // Build the Wikipedia API url

            const redisKey = req.body.email;
            // Try fetching the result from Redis first in case we have it cached
            return client.get(redisKey, (err, result) => {
                // If that key exist in Redis store
                // console.log("result==>", result);
                // console.log("hasi");


                if (result) {
                    console.log('result' + result);
                    const resultJSON = JSON.parse(result);
                    return res.status(200).send(resultJSON);
                }
                else {

                    var responseResult = {}
                    userService.login(req.body, (err, result) => {
                        if (err) {  /**
            * checking the error with if condition and sending status
            */
                            responseResult.sucesses = false;
                            responseResult.error = err;
                            res.status(500).send(responseResult)
                        }
                        else {
                            /**
                            * checking the result with else condition and sending status and with generation of token by payload containig id comparing with result id
                            */
                            const payload = {
                                user_id: result._id,
                                sucesses: true,
                                email: result.email,
                                firstName: result.firstName,
                                profilePic: result.profilePic

                            }
                    
                            const obj = util.GenerateTokenForAunthentication(payload);
                     
                            responseResult.token = obj
                            client.setex(redisKey, 36000, JSON.stringify(responseResult.token.token));
                            res.status(200).send(responseResult.token.token)

                        }
                    })
                }


            })
        }
        catch (err) {
            console.log('errors in controllers', err);

        }
    }
}




/**
 * Acessesing the getUser and passing the parameters request body from router and providing call back function with parametrs result and error
 */
exports.getUser = (req, res) => {
    try {
        var responseResult = {};
        userService.getUserEmail(req, (err, result) => {
            if (err) {
                /**
                 * checking the error with if condition and sending status
                 */
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult)
            }
            else {
                /**
                 * checking the result with else condition and sending status and with generation of token with payload with object contaning url
                 */
                responseResult.success = true;
                responseResult.result = result;

                const payload = {
                    user_id: responseResult.result._id
                }
                console.log(payload);
                const obj = util. GenerateTokenForResetPassword(payload);
                console.log("controller obj", obj);

                const url = `http://localhost:3000/resetPassword/${obj.token}`;
                sentMail.sendEMailFunction(url);
                //Send email using this token generated
                res.status(200).send(url);
            }
        })
    }
    catch (err) {
        console.log('errors in controllers', err);

    }
}
/**
 * Acessesing the sendResponse and passing the parameters request body from router and providing call back function with parametrs result and error
 */
exports.sendResponse = (req, res) => {
    try {
        var responseResult = {};
        console.log('in user ctrl send token is verified response');
        userService.redirect(req.decoded, (err, result) => {
            if (err) {
                /**
                 * checking the error with if condition and sending status
                 */
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult)
            }
            else {
                /**
                 * checking the result with else condition and sending status
                 */
                console.log('in user ctrl token is verified giving response');
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult);
            }
        })
    }
    catch (err) {
        console.log('errors in controllers', err);
    }
}
/**
 * Acessesing the setPassword and passing the parameters request body from router and providing call back function with parametrs result and error
 */
exports.setPassword = (req, res) => {
    try {
        var responseResult = {};
        userService.resetPass(req, (err, result) => {
            if (err) {
                /**
                 * checking the error with if condition and sending status
                 */
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult)
            }
            else {
                /**
                 * checking the result with else condition and sending status
                 */
                console.log('in user ctrl token is verified giving response');
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult);
            }
        })
    }
    catch (err) {
        console.log('errors in controllers', err);

    }
}
/**
 * Acessesing the getAllUsers and passing the parameters request body from router and providing call back function with parametrs result and error
 */
exports.getAllUsers = (req, res) => {
    try {
        var responseResult = {};
        userService.getAllUsers((err, result) => {
            if (err) {
                /**
                 * checking the error with if condition and sending status
                 */
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult)
            }
            else {
                /**
                 * checking the result with else condition and sending status
                 */
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult);
            }
        })
    }
    catch (err) {
        console.log('errors in controllers', err);

    }
} 
 
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.setProfilePic = (req, res) => {
    try {
        console.log("req-------------------->",req.decoded);
        // console.log("req-------------------->",req.file.location)
        var responseResult = {};
        userId = req.decoded.payload.user_id;
        let image = (req.file.location)
        userService.setProfilePic(userId, image, (err, result) => {
            console.log("imageeeeeeeeeeeeeeeeeeeeeeee=>", result);
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult)
            } else {
                responseResult.status = true;
                responseResult.data = result;
                res.status(200).send(responseResult);
            }
        })
    } catch (error) {
        res.send(error);
    }
}


exports.setProfilePic1 = (req, res) => {
    try {
        // console.log("req-------------------->",req.decoded);
        // console.log("req-------------------->",req.file.location)
        var responseResult = {};
      //  userId = req.decoded.payload.user_id;
        let image = (req.file.location)
       
            // console.log("imageeeeeeeeeeeeeeeeeeeeeeee=>", result);
            // if (err) {
            //     responseResult.success = false;
            //     responseResult.error = err;
            //     res.status(500).send(responseResult)
            // } else {
                responseResult.status = true;
                responseResult.data = image;
                res.status(200).send(responseResult);
            // }
    
    } catch (error) {
        res.send(error);
    }
}