/*****************************************************************************************
 * @purpose : it will generate the token for login and verifyUser purpose
 * @author  : Surendra      
 * @file    : token.js
 * @overview: These file may contain generating the token with secret key and payload
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
/**
 * defining the json web token through const varaible
 */
const jwt = require('jsonwebtoken');
module.exports = {
    /**
     * function for generation for token
     * @param {payload} payload 
     */
    GenerateTokenForResetPassword(payload) {/**
     * declaring the const varaible with  payload,secret key and duration of time
     */
        const token = jwt.sign({ payload }, 'secretkey', { expiresIn: "1d" })
        /**
         * creating object for generating token information
         */
        const obj = {
            success: true,
            message: 'Token Generated Successfully!!',
            token: token
        }
        return obj;
        /**
         * returning created object
         */
    },
    GenerateTokenForAunthentication(payload) {/**
        * declaring the const varaible with  payload,secret key and duration of time
        */
           const token = jwt.sign({ payload }, 'secretkeyAuthentications', { expiresIn: "1d" })
           /**
            * creating object for generating token information
            */
           const obj = {
               success: true,
               message: 'Token Generated Successfully!!',
               token: token
           }
           return obj;
           /**
            * returning created object
            */
       }
}