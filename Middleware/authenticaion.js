/*****************************************************************************************
 * @purpose : it will provides authentication
 * @author  : Surendra      
 * @file    : authenticaion.js
 * @overview: These file may contain various operations for authenticating the generating token
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
/**
 * define the jwt by jwt varaible
 */
var jwt = require('jsonwebtoken');
/**
* checking the generated token passing the parameters as request response next by call back function 
      */
exports.checkToken = (req, res, next) => {
    var token1 = req.headers['token']
    /**
     *decode token  
     */
    if (token1) {
        /**
         * verifies secret and checks exp 
         */
        jwt.verify(token1, 'secretkey', (err, decoded) => {
            console.log("answer",token1);
            
            if (err) {
                return res.send({
                    success: false,
                    message: 'Token is not valid'
                           
                });
            }
            /**
             * req decoded and next will pass the controllers 
             */
            else {
                req.decoded = decoded;
                 console.log("token",req.body);
                 
                next();
            }
        });
    }
    else {
        /**
         *  if there is no token return an error
         */
  
         
        return res.send({
        
            success: false,
            message: 'No token provided.'
        });
    }
}
exports.checkTokenAuthentication = (req, res, next) => {
    
    
    var token1 = req.headers['access-token']
    /**
     *decode token  
     */
    if (token1) {
        /**
         * verifies secret and checks exp 
         */
        jwt.verify(token1, 'secretkeyAuthentications', (err, decoded) => {
            console.log("answer",token1);
            
            if (err) {
                return res.send({
                    success: false,
                    message: 'Token is not valid'
                           
                });
            }
            /**
             * req decoded and next will pass the controllers 
             */
            else {
                req.decoded = decoded;
                 console.log("token",req.body);
                 
                next();
            }
        });
    }
    else {
 
        return res.send({
        
            success: false,
            message: 'No token provided.'
        });
    }
}

