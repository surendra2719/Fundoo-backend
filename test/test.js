/*****************************************************************************************
 * @purpose : In these file it contains testing soruce with mocha testing and chai assertion libaray
 * @author  : Surendra      
 * @file    : test.js
 * @overview: These file may contain sorce of code to test regestration,login,verifyUser and resetPassword end points 
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
/**
 * Defining requiring needs through varaibles
 */
var chai = require('chai');
var file = require('fs');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var server = require('../server')
chai.should();
/**
 * Declaring describe function with name of the functionality and callback function
 */
describe('Status and content', function () {
    describe('registration', function () {
        /**
         * Acessesing the requiring data from JSON file through readfile()
         */
        var requestBody = readFile()
        /**
         *Declaring it function with name of the functionality and callback function 
         */
        it('status', function (done) {
            /**
             * Posting the data from registration
             */
            chai.request(server).post('/registration')
                /**
                 * 
                 *Sending the data containing registration data
                 */
                .send(requestBody.regisrartiondata)
                .end((err, res) => {
                    if (err) {
                        console.log("error in ending");
                    }
                    else {
                        console.log("responce in test", res.body);
                        res.should.have.status(200);
                        /**
                         * Declaring describe function with name of the functionality and callback function
                         */
                        describe('login', function () {
                            var requestBody = readFile()
                            it('status', function (done) {
                                chai.request(server).post('/login')
                                    /**
                                     *Sending the data containing verifyUserdata 
                                     */
                                    .send(requestBody.logindata)
                                    .end((err, res) => {
                                        if (err) {
                                            console.log("error in ending");
                                        }
                                        else {
                                            // console.log("responce in test", res.body);
                                            res.should.have.status(200);
                                            /**
                                             * Declaring describe function with name of the functionality and callback function
                                             */
                                            describe('verifyuser', function () {
                                                var requestBody = readFile()
                                                /**
                                                 * Acessesing the requiring data from JSON file through readfile()
                                                 */
                                                it('status', function (done) {
                                                    chai.request(server).post('/verifyUser')
                                                        /**
                                                         *Sending the data containing verifyUserdata 
                                                         */
                                                        .send(requestBody.verifyUserdata)
                                                        .end((err, res) => {
                                                            if (err) {
                                                                console.log("error in ending");
                                                            }
                                                            else {
                                                                // console.log("responce in test", res.body);
                                                                res.should.have.status(200);
                                                                describe('resetPassword', function () {
                                                                    /**
                                                                     * Declaring describe function with name of the functionality and callback function
                                                                     */
                                                                    var requestBody = readFile()
                                                                    /**
                                                                     * Acessesing the requiring data from JSON file through readfile()
                                                                     */
                                                                    it('status', function (done) {
                                                                        chai.request(server).post('/resetPassword/:token')
                                                                            /**
                                                                             *Sending the data containing resetpassworddata data
                                                                             */
                                                                            .send(requestBody.resetpassworddata)
                                                                            .end((err, res) => {
                                                                                if (err) {
                                                                                    console.log("error in ending");
                                                                                }
                                                                                else {
                                                                                    // console.log("responce in test", res.body);
                                                                                    res.should.have.status(200);
                                                                                    describe('craetenote', function () {
                                                                                        /**
                                                                                         * Declaring describe function with name of the functionality and callback function
                                                                                         */
                                                                                        var requestBody = readFile()
                                                                                        /**
                                                                                         * Acessesing the requiring data from JSON file through readfile()
                                                                                         */
                                                                                        it('status', function (done) {
                                                                                            chai.request(server).post('/createNote')
                                                                                                /**
                                                                                                 *Sending the data containing resetpassworddata data
                                                                                                 */
                                                                                                .send(requestBody.createnote)
                                                                                                .end((err, res) => {
                                                                                                    if (err) {
                                                                                                        console.log("error in ending");
                                                                                                    }
                                                                                                    else {
                                                                                                        // console.log("responce in test", res.body);
                                                                                                        res.should.have.status(200);

                                                                                                        describe('getnotes', function () {
                                                                                                            /**
                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                             */
                                                                                                            var requestBody = readFile()
                                                                                                            /**
                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                             */
                                                                                                            it('status', function (done) {
                                                                                                                chai.request(server).get('/getNotes')
                                                                                                                    /**
                                                                                                                     *Sending the data containing resetpassworddata data
                                                                                                                     */
                                                                                                                    .send(requestBody.getnotes)
                                                                                                                    .end((err, res) => {
                                                                                                                        if (err) {
                                                                                                                            console.log("error in ending");
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            // console.log("responce in test", res.body);
                                                                                                                            res.should.have.status(200);
                                                                                                                        }
                                                                                                                        describe('updatecolor', function () {
                                                                                                                            /**
                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                             */
                                                                                                                            var requestBody = readFile()
                                                                                                                            /**
                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                             */
                                                                                                                            it('status', function (done) {
                                                                                                                                chai.request(server).put('/updateColor')
                                                                                                                                    /**
                                                                                                                                     *Sending the data containing resetpassworddata data
                                                                                                                                     */
                                                                                                                                    .send(requestBody.updatecolor)
                                                                                                                                    .end((err, res) => {
                                                                                                                                        if (err) {
                                                                                                                                            console.log("error in ending");
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            // console.log("responce in test", res.body);
                                                                                                                                            res.should.have.status(200);
                                                                                                                                        }
                                                                                                                                        describe('deletenotes', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).post('/deleteNote')
                                                                                                                                                    /**
                                                                                                                                                     *Sending the data containing resetpassworddata data
                                                                                                                                                     */
                                                                                                                                                    .send(requestBody.deletenotes)
                                                                                                                                                    .end((err, res) => {
                                                                                                                                                        if (err) {
                                                                                                                                                            console.log("error in ending");
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            // console.log("responce in test", res.body);
                                                                                                                                                            res.should.have.status(200);
                                                                                                                                                        }
                                                                                                                                                        done();
                                                                                                                                                    })
                                                                                                                                            })

                                                                                                                                        })
                                                                                                                                        describe('archivenotes', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).put('/isArchived')
                                                                                                                                                    /**
                                                                                                                                                     *Sending the data containing resetpassworddata data
                                                                                                                                                     */
                                                                                                                                                    .send(requestBody.archivenotes)
                                                                                                                                                    .end((err, res) => {
                                                                                                                                                        if (err) {
                                                                                                                                                            console.log("error in ending");
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            // console.log("responce in test", res.body);
                                                                                                                                                            res.should.have.status(200);
                                                                                                                                                        }
                                                                                                                                                        done();
                                                                                                                                                    })
                                                                                                                                            })

                                                                                                                                        })
                                                                                                                                 
                                                                                                                                        describe('remindernotes', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).put('/reminder')
                                                                                                                                                    /**
                                                                                                                                                     *Sending the data containing resetpassworddata data
                                                                                                                                                     */
                                                                                                                                                    .send(requestBody.remindernotes)
                                                                                                                                                    .end((err, res) => {
                                                                                                                                                        if (err) {
                                                                                                                                                            console.log("error in ending");
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            // console.log("responce in test", res.body);
                                                                                                                                                            res.should.have.status(200);
                                                                                                                                                        }
                                                                                                                                                        done();
                                                                                                                                                    })
                                                                                                                                            })

                                                                                                                                        })
                                                                                                                                    
                                                                                                                                        describe('trashnotes', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).put('/isTrashed')
                                                                                                                                                    /**
                                                                                                                                                     *Sending the data containing resetpassworddata data
                                                                                                                                                     */
                                                                                                                                                    .send(requestBody.trashnotes)
                                                                                                                                                    .end((err, res) => {
                                                                                                                                                        if (err) {
                                                                                                                                                            console.log("error in ending");
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            // console.log("responce in test", res.body);
                                                                                                                                                            res.should.have.status(200);
                                                                                                                                                        }
                                                                                                                                                        done();
                                                                                                                                                    })
                                                                                                                                            })

                                                                                                                                        })
                                                                                                                                       
                                                                                                                                        describe('editnotes', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).put('/editTitle')
                                                                                                                                                    /**
                                                                                                                                                     *Sending the data containing resetpassworddata data
                                                                                                                                                     */
                                                                                                                                                    .send(requestBody.editnotes)
                                                                                                                                                    .end((err, res) => {
                                                                                                                                                        if (err) {
                                                                                                                                                            console.log("error in ending");
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            // console.log("responce in test", res.body);
                                                                                                                                                            res.should.have.status(200);
                                                                                                                                                        }
                                                                                                                                                        done();
                                                                                                                                                    })
                                                                                                                                            })

                                                                                                                                        })
                                                                                                                                        describe('editdescription', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).put('/editDescription')
                                                                                                                                                    /**
                                                                                                                                                     *Sending the data containing resetpassworddata data
                                                                                                                                                     */
                                                                                                                                                    .send(requestBody.editdescription)
                                                                                                                                                    .end((err, res) => {
                                                                                                                                                        if (err) {
                                                                                                                                                            console.log("error in ending");
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            // console.log("responce in test", res.body);
                                                                                                                                                            res.should.have.status(200);
                                                                                                                                                        }
                                                                                                                                                        done();
                                                                                                                                                    })
                                                                                                                                            })

                                                                                                                                        })
                                                                                                                                        done();
                                                                                                                                    })
                                                                                                                            })

                                                                                                                        })
                                                                                                                        done();
                                                                                                                    })
                                                                                                            })

                                                                                                        })

                                                                                                    }
                                                                                                    done();
                                                                                                })
                                                                                        })

                                                                                    })


                                                                                }
                                                                                done();
                                                                            })
                                                                    })
                                                                })
                                                            }
                                                            done();
                                                        })
                                                })
                                            })
                                        }
                                        done();
                                    })
                            })
                        })
                    }
                    done();
                })
        })
    })
})
function readFile() {
    var userData = file.readFileSync('Data.json');
    var read = JSON.parse(userData);
    return read
}