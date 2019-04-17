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
                                                                                                                                        describe('pinned', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).put('/isPinned')
                                                                                                                                               
                                                                                                                                                    .send(requestBody.pinned)
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
                                                                                                                                        describe('image', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).put('/uploadImage')
                                                                                                                                                
                                                                                                                                                    .send(requestBody.image)
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
                                                                                                                                        describe('profilepic', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).put('/setProfilePic')
                                                                                                                                                   
                                                                                                                                                    .send(requestBody.profilepic)
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
                                                                                                                                        describe('uploadImage', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).put('/uploadImage')
                                                                                                                                                   
                                                                                                                                                    .send(requestBody.uploadImage)
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
                                                                                                                                        describe('deleteLabelToNote', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).post('/deleteLabelToNote')
                                                                                                                                                  
                                                                                                                                                    .send(requestBody.deleteLabelToNote)
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

                                                                                                                                        describe('saveLabelToNote', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).post('/saveLabelToNote')
                                                                                                                                                  
                                                                                                                                                    .send(requestBody.saveLabelToNote)
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
                                                                                                                                        describe('addLabel', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).post('/addLabel')
                                                                                                                                                  
                                                                                                                                                    .send(requestBody.addLabel)
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
                                                                                                                                        describe('getLabels', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).get('/getLabels')
                                                                                                                                                  
                                                                                                                                                    .send(requestBody.getLabels)
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
                                                                                                                                        describe('deleteLabels', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).post('/deleteLabels')
                                                                                                                                                  
                                                                                                                                                    .send(requestBody.deleteLabels)
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

                                                                                                                                        describe('updateLabels', function () {
                                                                                                                                            /**
                                                                                                                                             * Declaring describe function with name of the functionality and callback function
                                                                                                                                             */
                                                                                                                                            var requestBody = readFile()
                                                                                                                                            /**
                                                                                                                                             * Acessesing the requiring data from JSON file through readfile()
                                                                                                                                             */
                                                                                                                                            it('status', function (done) {
                                                                                                                                                chai.request(server).put('/updateLabels')
                                                                                                                                                  
                                                                                                                                                    .send(requestBody.updateLabels)
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