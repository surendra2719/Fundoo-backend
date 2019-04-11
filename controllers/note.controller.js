/*****************************************************************************************
 * @purpose : it will provides authentication
 * @author  : Surendra      
 * @file    : note.controller.js
 * @overview: These file may contain various operations for authenticating the generating token
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
const noteService = require('../services/note.service')


exports.noteController = (req, res) => {
    // req.check('title', " it should not be empty ").not().isEmpty()
    // req.check('description', " it should not be empty ").not().isEmpty()
    // var err = req.validationErrors();
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors;
        res.status(500).send(responseResult);
    }
    try {
        /**
        * Creating responseResult object
        */
        var responseResult = {}
        /**
         * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
         */
        noteService.createNote(req, (err, result) => {
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
exports.getNoteController = (req, res) => {

    try {
        /**
        * Creating responseResult object
        */
        var responseResult = {}
        /**
         * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
         */
        noteService.getNote(req, (err, result) => {
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
exports.updateColorController = (req, res) => {
    // req.check('noteID', " it should not be empty ").not().isEmpty()
    // req.check('color', " it should not be empty ").not().isEmpty()
    // var err = req.validationErrors();
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors;
        res.status(500).send(responseResult);
    }
    try {
        /**
        * Creating responseResult object
        */
        var responseResult = {}
        /**
         * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
         */
        noteID = req.body.noteID;
        color = req.body.color;
        noteService.updateColor(noteID, color, (err, result) => {
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
exports.deleteNoteController = (req, res) => {
    req.check('noteID', " it should not be empty ").not().isEmpty()

    // var err = req.validationErrors();
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors;
        res.status(500).send(responseResult);
    }
    try {
        /**
        * Creating responseResult object
        */
        var responseResult = {}
        /**
         * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
         */
        noteID = req.body.noteID;

        noteService.deleteNote(noteID, (err, result) => {
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
exports.isArchived = (req, res) => {
    req.checkBody('noteID', 'noteID required').not().isEmpty();
    req.checkBody('archive', 'archive required').not().isEmpty();

    // var err = req.validationErrors();
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors;
        res.status(500).send(responseResult);
    }
    try {
        /**
        * Creating responseResult object
        */
        var responseResult = {}
        /**
         * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
         */
        noteID = req.body.noteID;
        archive = req.body.archive;

        noteService.isArchived(noteID, archive, (err, result) => {
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
exports.setreminder = (req, res) => {
    req.checkBody('noteID', 'noteID required').not().isEmpty();
    // req.checkBody('reminder', ' reminder  required').not().isEmpty();

    // var err = req.validationErrors();
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors;
        res.status(500).send(responseResult);
    }
    try {
        /**
        * Creating responseResult object
        */
        var responseResult = {}
        /**
         * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
         */
        noteID = req.body.noteID;
        reminder = req.body.reminder;

        noteService.setreminder(noteID, reminder, (err, result) => {
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
exports.isTrashed = (req, res) => {
    req.checkBody('noteID', 'noteID required').not().isEmpty();
    // var err = req.validationErrors();
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors;
        res.status(500).send(responseResult);
    }
    try {
        /**
        * Creating responseResult object
        */
        var responseResult = {}
        /**
         * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
         */
        noteID = req.body.noteID;

        noteService.isTrashed(noteID, (err, result) => {
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
exports.editTitle = (req, res) => {


    // req.checkBody('noteID', 'noteID required').not().isEmpty();

    // var err = req.validationErrors();
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors;
        res.status(500).send(responseResult);
    }
    try {
        /**
        * Creating responseResult object
        */
        var responseResult = {}
        /**
         * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
         */
        noteID = req.body.noteID;
        title = req.body.title;
        console.log("results", req.body.noteID, req.body.title);

        noteService.editTitle(noteID, title, (err, result) => {
            /**
             * checking the error with if condition and sending status
             */
            console.log("result in the title===>", result);

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
exports.editDescription = (req, res) => {
    console.log("controller==>", req.body);

    // req.checkBody('noteID', 'noteID required').not().isEmpty();

    // var err = req.validationErrors();
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors;
        res.status(500).send(responseResult);
    }
    try {
        /**
        * Creating responseResult object
        */
        var responseResult = {}
        /**
         * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
         */
        noteID = req.body.noteID;
        description = req.body.description;
        noteService.editDescription(noteID, description, (err, result) => {
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
exports.isPinned = (req, res) => {
    req.checkBody('noteID', 'noteID required').not().isEmpty();

    // var err = req.validationErrors();
    var errors = req.validationErrors();
    var responseResult = {};
    if (errors) {
        responseResult.success = false;
        responseResult.error = errors;
        res.status(500).send(responseResult);
    }
    try {
        /**
        * Creating responseResult object
        */
        var responseResult = {}
        /**
         * Acessesing the registration and passing the parameters request body from router and providing call back function with parametrs result and error
         */
        noteID = req.body.noteID;
        pinned = req.body.pinned;

        noteService.isPinned(noteID, pinned, (err, result) => {
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

exports.updateImage = (req, res) => {
    try {
        req.checkBody('noteID', 'noteID required').not().isEmpty();
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            noteID = req.body.noteID;
            let imageUp = req.body.image;
            // let imageUp = (req.file.location);
            noteService.updateImage(noteID, imageUp,(err, result) => {
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
        }
    } catch (error) {
        res.send(error);
    }
}


exports.saveLabelToNote = (req, res) => {
    try {
        var responseResult = {};
            noteID = req.body.noteID
            noteService.saveLabelToNote( req.body, (err, result) => {
                console.log("result in controller------->",result);
                
                if (err) {

                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        
    } catch (error) {

        res.send(error)
    }
}

exports.deleteLabelToNote = (req, res) => {
    try {
        var responseResult = {};
            noteID = req.body.noteID;
            noteService.deleteLabelToNote(req.body, (err, result) => {
                if (err) {

                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        
    } catch (error) {

      res.send(error)
    }
}


exports.addLabel = (req, res) => {
    try {
        // console.log("in Controller",req);

        var res_result = {};
  
            const labelData = {
                userId: req.decoded.payload.user_id,
                label: req.body.label
            }
            noteService.addLabel(labelData, (err, result) => {
                if (err) {
                    res_result.status = false;
                    res_result.error = err;
                    res.status(500).send(res_result);
                }
                else {

                    res_result.status = true;
                    res_result.data = result;
                    res.status(200).send(res_result);
                }
            })
        
    }
    catch (error) {
        res.send(error)
    }
}

exports.getLabels = (req, res) => {
    try {
        console.log("in Controller",req.body,req.decoded,req.decoded.id);
        var res_result = {};
  
   
            const labelData = {
                userId: req.decoded.payload.user_id,
            }
            noteService.getLabels(labelData, (err, result) => {
                if (err) {

                    res_result.status = false;
                    res_result.error = err;
                    res.status(500).send(res_result);
                }
                else {

                    res_result.status = true;
                    res_result.data = result;
                    res.status(200).send(res_result);
                }
            })
        
    }
    catch (error) {
        res.send(error)
    }
}

exports.deleteLabel = (req, res) => {
    try {
        var res_result = {};
  
            const labelData = {
                labelID: req.body.labelID,
            }
            noteService.deleteLabel(labelData, (err, result) => {
                if (err) {
                res_result.status = false;
                res_result.error = err;
                res.status(500).send(res_result);
                }
                else {

                    res_result.status = true;
                    res_result.data = result;
                    res.status(200).send(res_result);
                }
            })
        
    }
    catch (error) {
        res.send(error)
    }
}

exports.updateLabel = (req, res) => {
    try {
        console.log("in Controller",req.body);

        var res_result = {};

            const labelData = {
                editLabel: req.body.editLabel,
                labelID: req.body.labelID 
            }
            noteService.updateLabel(labelData, (err, result) => {
                if (err) {

                res_result.status = false;
                res_result.error = err;
                res.status(500).send(res_result);
                }
                else {

                    res_result.status = true;
                    res_result.data = result;
                    res.status(200).send(res_result);
                }
            })
        
    }
    catch (error) {
    res.send(error)
    }
}
