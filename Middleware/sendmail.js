/*****************************************************************************************
 * @purpose : it will provides nodemailer operation
 * @author  : Surendra      
 * @file    : sendmail.js
 * @overview: These file may contain various operations for node mailer byb dotenv
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
/**
 *   define the nodemailers by const varaible
 */
const nodemailer = require('nodemailer');
// require('dotenv').config()

/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
exports.sendEMailFunction = (url) => {
    /**
     * creating transport obj send mail
     */
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            /**
             * env creating and accesses the data from env
             */
            user: process.env.email,
            pass: process.env.password
        },
    });
    const mailOptions = {
        from: process.env.email,        
        /**sender address
         */
        to: process.env.email,   
        /**list of receivers */
        subject: 'verication mail',       
        /**Subject line
         */
        text: ' verifaction link is:\n\n' + url
    };
    /**
     * validating the errors throughcall back function passing err and info parameters along mail option parameter 
     */
    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log("error on sent mail" + err)
        else
            console.log("result sent on mail" + info);
    });
}