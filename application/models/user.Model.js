/*****************************************************************************************
 * @purpose : it will provides schema and connectiong to mongoose 
 * @author  : Surendra      
 * @file    : user.Controllers.js
 * @overview: These file may contain various models connecting to database
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
/**
 * Definig mongoose, saltRounds and bcrypt and designing schema
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
mongoose.set('useCreateIndex', true);
const UserSchema = mongoose.Schema({
    firstName: {
        type: String, required: [true, 'First name required']
    },
    lastName: {
        type: String, required: [true, 'Last name required']
    },
    email: {
        type: String, required: [true, 'Email required00']
    },
    password: {
        type: String, required: [true, 'password require']
    },
    profilePic: {
        type: String,
    }

}, {
        timestamps: true
    });
/**
 * Defining userModel function
 */
function userModel() { }
var user = mongoose.model('user', UserSchema);
/**
 * Defining hash function for encrypting password
 */
function hash(password) {
    var hash = bcrypt.hashSync(password, 10);
    return hash;
}
/**
 * Model for registration passing body and callback as parameter
 */
userModel.prototype.registration = (body, callback) => {
    console.log("body model", body);
    /**
     * Finding the data from database
     */
    user.find({
        "email": body.email
    }, (err, data) => {
        if (err) {
            console.log("Error in registration");
            callback(err);
            /**
             * checking the data is there or not in database
             */
        } else if (data.length > 0) {
            console.log("Email already exists");
            callback("User already present")
        } else {
            /**
             * Creating the new user
             */
            const newUser = new user({
                "firstName": body.firstName,
                "lastName": body.lastName,
                "email": body.email,
                "password": hash(body.password)
            });
            /**
             * Saving the newUser data to database
             */
            newUser.save((err, result) => {
                if (err) {
                    console.log("Model not found");
                    callback(err);
                } else {
                    console.log("Registered Successfully");
                    callback(null, result);
                }
            })
        }
    });
}
/**
 * Model for login passing body and callback as parameter
 */
userModel.prototype.login = (body, callback) => {
    /**
     * Finding user in database
     */
    user.findOne({
        "email": body.email
    }, (err, data) => {

        if (err) {
            callback(err);
        } else if (data != null) {
            /**
             * Comparing password
             */
            bcrypt.compare(body.password, data.password).then(function (res) {
                if (res) {
                    console.log("login succesfully");
                    callback(null, data);
                } else {
                    console.log("Incorrect password");
                    callback("Incorrect password");
                }
            });
        } else {
            console.log("Invalid user");
            callback("invalid user");
        }
    })

}
/**
 * Model for findUserEmail pasiing data and callback as parameter 
 */
userModel.prototype.findUserEmail = (data, callback) => {
    /**
     * Finding user in database
     */
    user.findOne({ "email": data.body.email }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            if (result !== null && data.body.email == result.email) {
                callback(null, result);
            }
            else {
                callback("incorect mail")
            }
        }
    });
}
/**
 * Model for conformUser pasiing data and callback as parameter
 */
userModel.prototype.confirmUser = (data, callback) => {
    /**
     * conforming user and updating with id to database
     */
    user.updateOne({ _id: data.payload.id }, { is_verified: true }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    });
}
/**
 * Model for updateUserPassword passing req and callback as parameter
 */
userModel.prototype.updateUserPassword = (req, callback) => {
    console.log(' in model--data:--', req.decoded);
    console.log(' in model--body:--', req.body);
    /**
     * Generating newpassword 
     */
    let newpassword = bcrypt.hashSync(req.body.password, saltRounds);
    console.log('new pass bcrypt--', newpassword);
    /**
     * updating and comparing , decoding newpassword with id 
     * */
    user.updateOne({ _id: req.decoded.payload.user_id }, { password: newpassword }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    });
}
/**
 * Model for getAllusers paasing callback as parameter
 */
userModel.prototype.getAllUsers = (callback) => {
    /**
     * Finding users in database
     */
    user.find({}, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    });
}
userModel.prototype.setProfilePic = (userID, image, callback) => {
    // console.log("ID=====================",userID);
    // console.log("image=====================",image);
    user.findOneAndUpdate({
            _id: userID
        }, {
            $set: {
                profilePic: image
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                console.log("updated image successfully")
                return callback(null, image)
            }
        });
};
/**
 * Exporting userModel
 */
module.exports = new userModel;



