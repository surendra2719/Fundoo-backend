/*****************************************************************************************
 * @purpose : it will give information about the servers in connection or not
 * @author  : Surendra      
 * @file    : user.services.js
 * @overview: These file may contain callback operations with errors and result and request from controllers
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
/**
 * Definig the user model through  const 
 */
const userModel = require('../application/models/user.Model')
/**
 * Exporting registration and passing the parameters as data and callback done by callback functions
 */
exports.registration = (data, callback) => {
    try {
        userModel.registration(data, (err, result) => {
            /**
             * checking error with if condtion
             */
            if (err) {
                console.log("server in error ")
                callback(err)
            }
            else {
                /**
                 * cheking result with else condition
                 */

                console.log("server is in connection", result)
                callback(null, result)
            }
        })
    }
    catch (err) {
      console.log('errors in serivces',err)
    }
}
/**
 * Exporting login and passing the parameters as data and callback done by callback functions
 */
exports.login = (data, callback) => {
    try {
        userModel.login(data, (err, result) => {
            if (err)
        /**
         * checking error with if condtion
         */ {
                console.log("server in error ")

                callback(err)
            }
            else
            /**
             * cheking result with else condition
             */ {
                console.log("server is in connection", result)
                callback(null, result)
            }
        })
    }
    catch (err) {
      console.log('errors in serivces',err)
    }
}
/**
 * Exporting redirect and passing the parameters as decoded and callback done by callback functions
 */
exports.redirect = (decoded, callback) => {
    try {
        userModel.confirmUser(decoded, (err, result) => {
            if (err) {
                /**
                 * checking error with if condtion
                 */
                callback(err);
            } else {
                /**
                 * cheking result with else condition
                 */

                callback(null, result);
            }
        })
    }
    catch (err) {
      console.log('errors in serivces',err)
    }
}
/**
 * Exporting getUserEmail and passing the parameters as data and callback done by callback functions
 */
exports.getUserEmail = (data, callback) => {
    try {
        userModel.findUserEmail(data, (err, result) => {
            if (err) {
                /**
                * checking error with if condtion
                */
                callback(err);
            } else {
                /**
                 * cheking result with else condition
                 */

                callback(null, result);
            }
        })
    }
    catch (err) {
      console.log('errors in serivces',err)
    }
}
/**
 * Exporting resetPass and passing the parameters as data and callback done by callback functions
 */
exports.resetPass = (req, callback) => {
    try {
        userModel.updateUserPassword(req, (err, result) => {
            if (err) {
                /**
                 * checking error with if condtion
                 */
                callback(err);
            } else {
                /**
                 * cheking result with else condition
                 */

                callback(null, result);
            }
        })
    }
    catch (err) {
      console.log('errors in serivces',err)
    }
}

/**
 * Exporting getAllUsers and passing the parameters as data and callback done by callback functions
 */
exports.getAllUsers = (data, callback) => {
    try {
        userModel.getAllUsers(data, (err, result) => {
            if (err) {
                /**
                 * checking error with if condtion
                 */
                callback(err);
            }
            else {
                /**
                 * cheking result with else condition
                 */

                callback(null, result);
            }
        }
        )
    }
    catch (err) {
      console.log('errors in serivces',err)
    }
}
// exports.setProfilePic  = (paramID,image,callback) => {
//     console.log("in services");
   
//     userModel.setProfilePic (paramID,image, (err, result) => {
//         if (err) {
//             callback(err);
//         } else {
//             return callback(null, result)
//         }
//     })
// }

exports.setProfilePic = (paramID, image, callback) => {
    // console.log("in services");
    try {
        userModel.setProfilePic(paramID, image, (err, result) => {
            if (err) {
                console.log("service error in setProfile pic");
                callback(err);
            } else {
                 callback(null, result)
            }
        })
    } catch (error) {
        callback.send(error);
    }
}
