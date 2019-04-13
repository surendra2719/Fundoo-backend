/*****************************************************************************************
 * @purpose : it will give paths to backend operations
 * @author  : Surendra      
 * @file    : routes.js
 * @overview: These file may contain various paths to backend operations and posting ,retreving
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
/**
 * Defining the express,router,userController and Middleware through const keyword
 */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.Controllers')
const noteController = require('../controllers/note.controller')
const Middleware = require("../Middleware/authenticaion");
const upload=require("../services/fileUpload")
/**
 * Acessesing the registration,login,verifyUser and resetPassword and posting them 
 */
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/verifyUser', userController.getUser);
router.post('/resetpassword/:token', Middleware.checkToken, userController.setPassword);
router.put('/setProfilePic', Middleware.checkTokenAuthentication, upload.single('image'), userController.setProfilePic);
router.put('/setProfilePic1', Middleware.checkTokenAuthentication, upload.single('image'), userController.setProfilePic1);
/**
 * Acessesing the getAllUsers and geting threm
 */
router.get('/getAllUsers', userController.getAllUsers);
router.post('/createNote', Middleware.checkTokenAuthentication, noteController.noteController);
router.get('/getNotes', Middleware.checkTokenAuthentication, noteController.getNoteController)
router.put('/updateColor', Middleware.checkTokenAuthentication, noteController.updateColorController)
router.post('/deleteNote', Middleware.checkTokenAuthentication, noteController.deleteNoteController)
router.put('/isArchived', Middleware.checkTokenAuthentication, noteController.isArchived);
router.put('/reminder', Middleware.checkTokenAuthentication, noteController.setreminder);
router.put('/isTrashed', Middleware.checkTokenAuthentication, noteController.isTrashed)
router.put('/editTitle', Middleware.checkTokenAuthentication, noteController.editTitle)
router.put('/editDescription', Middleware.checkTokenAuthentication, noteController.editDescription)
router.put('/isPinned', Middleware.checkTokenAuthentication, noteController.isPinned)
router.put('/uploadImage', Middleware.checkTokenAuthentication, noteController.updateImage);
router.post('/saveLabelToNote',  Middleware.checkTokenAuthentication,noteController.saveLabelToNote)
router.post('/deleteLabelToNote',  Middleware.checkTokenAuthentication,noteController.deleteLabelToNote)
router.post('/addLabel', Middleware.checkTokenAuthentication, noteController.addLabel)
router.get('/getLabels', Middleware.checkTokenAuthentication, noteController.getLabels)
router.post('/deleteLabels', Middleware.checkTokenAuthentication, noteController.deleteLabel)
router.put('/updateLabels',  Middleware.checkTokenAuthentication, noteController.updateLabel)

module.exports = router;
