/*****************************************************************************************
 * @purpose : it will provides schema and connectiong to mongoose 
 * @author  : Surendra      
 * @file    : note.model.js
 * @overview: These file may contain various models connecting to database
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const NoteSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, "userId is required"]
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    reminder: {
        type: String,

    },
    color: {
        type: String,

    },
    image: {
        type: String,

    },
    archive: {
        type: Boolean,
    },
    pinned: {
        type: Boolean,
    },
    trash: {
        type: Boolean,
    },
    label: [{
        type: String,
        ref: 'labeSchema',
     
    }]
},
    {
        timestamps: true
    });


const Note = mongoose.model('note', NoteSchema);

class noteModel { }


noteModel.prototype.createNoteModel = (req, res) => {
    console.log("request in create note==>===========>", req.body);

    const userdata = new Note(req.body);
    userdata.save((err, result) => {
        if (err) {
            console.log("Model not found");
            res(err);
        } else {
            console.log("Note saved sucessfully");
            res(null, result);
        }
    })
}

noteModel.prototype.getNoteModel = (req, res) => {

    Note.find({ userId: req.decoded.payload.user_id }, (err, result) => {
        if (err) {
            console.log("Model not found");
            res(err);
        } else {
            console.log("Note retrived sucessfully");
            res(null, result);
        }
    })
}

noteModel.prototype.updateColorModel = (noteID, updateNote, res) => {

    Note.findOneAndUpdate(
        {
            _id: noteID
        },
        {
            $set: {
                color: updateNote
            }
        }, (err, result) => {
            if (err) {
                console.log("color not updated");
                res(err);
            } else {
                console.log("color updated sucessfully");
                res(null, updateNote);
            }
        })
}

noteModel.prototype.isArchived = (noteID, archiveNote, callback) => {
    Note.findOneAndUpdate({
        _id: noteID
    }, {
            $set: {
                archive: archiveNote,
                trash: false,
                pinned: false
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                return callback(null, archiveNote)
            }
        });
}
noteModel.prototype.setreminder = (noteID, reminderNote, callback) => {
    Note.findOneAndUpdate({
        _id: noteID
    }, {
            $set: {
                reminder: reminderNote,
                trash: false,
                pinned: false
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                return callback(null, reminderNote)
            }
        });
}
noteModel.prototype.isTrashed = (noteID, trashNote, callback) => {
    Note.findOneAndUpdate(
        {
            _id: noteID
        },
        {
            $set: {
                trash: trashNote.status,
                pinned: false,
                archive: false
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {

                return callback(null, trashNote.status)
            }
        });
};
noteModel.prototype.getTrashStatus = (id, callback) => {
    Note.findOne({ _id: id }, (err, result) => {
        console.log("id", id);
        if (err) {
            callback(err)
        } else {
            console.log("status", result)
            return callback(null, result.trash)
        }
    })
}
noteModel.prototype.deleteNoteModel = (req, res) => {


    Note.deleteOne({ _id: req }, (err, result) => {
        if (err) {
            res(err)
        } else {
            console.log("resul", result);
            const obj = {
                status: 200,
                msg: "note is deleted successfully",
                result: result
            }
            res(null, obj);
        }
    })
}
noteModel.prototype.editTitle = (paramID, paramData, res) => {
    console.log("paranID", paramID);

    Note.findOneAndUpdate(
        {
            _id: paramID
        },
        {
            $set: {
                title: paramData,
            }
        },
        (err, result) => {
            if (err) {
                res(err)
            } else {

                return res(null, paramData)
            }
        });
}
noteModel.prototype.editDescription = (paramID, paramData, res) => {

    Note.findOneAndUpdate(
        {
            _id: paramID

        },
        {
            $set: {
                description: paramData,
            }
        },
        (err, result) => {
            if (err) {
                res(err)
            } else {

                return res(null, paramData)
            }
        });
}

noteModel.prototype.isPinned = (noteID, pinParams, callback) => {
    Note.findOneAndUpdate(
        {
            _id: noteID
        },
        {
            $set: {
                pinned: pinParams,
                trash: false,
                archive: false
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {

                return callback(null, pinParams)
            }
        });
};
noteModel.prototype.updateImage = (noteID, updateNote, callback) => {
    Note.findOneAndUpdate({
        _id: noteID
    }, {
            $set: {
                image: updateNote
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                console.log("updated image to note successfully")
                return callback(null, updateNote)
            }
        });
};

noteModel.prototype.saveLabelToNote = (labelParams, callback) => {
    console.log("in model", labelParams.noteID);
    var labelledNote = null;
    var noteID = null;
    if (labelParams != null) {
        labelledNote = labelParams.label;
        noteID = labelParams.noteID;
    } else {
        console.log("in modelerr");

        callback("Pinned note not found")
    }
    Note.findOneAndUpdate(
        {
            _id: noteID
        },
        {
            $push: {
                label: labelledNote,
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                console.log("in model success");
                let res = result.label;
                res.push(labelledNote);
                return callback(null, res)
            }
        });
};
/**
* 
* @param {*} labelParams 
* @param {*} callback 
*/
noteModel.prototype.deleteLabelToNote = (labelParams, callback) => {
    console.log("in model", labelParams);
    var labelledNote = null;
    var noteID = null;
    if (labelParams != null) {
        labelledNote = labelParams.value;
        noteID = labelParams.noteID;
    } else {
        console.log("in modelerr");

        callback("Pinned note not found")
    }
    Note.findOneAndUpdate(
        {
            _id: noteID
        },
        {
            $pull: {
                label: labelledNote,
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                let newArray = result.label;
                console.log("in model success result-------------->", result);
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i] === labelledNote) {
                        newArray.splice(i, 1);
                        return callback(null, newArray)
                    }
                }
            }
        });
};

var labelSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'UserSchema'
    },
    label: {
        type: String,
        require: [true, "Label require"],
        unique: true
    }
}, {
        timestamps: true
    }
)
var label = mongoose.model('Label', labelSchema);

noteModel.prototype.addLabel = (labelData, callback) => {
    console.log("ultimate save", labelData);

    const Data = new label(labelData);
    Data.save((err, result) => {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            console.log("label result", result);

            return callback(null, result);
        }
    })
}


noteModel.prototype.getLabels = (id, callback) => {
    //console.log("in model", id);

    label.find({ userID: id.userID }, (err, result) => {
        if (err) {
            callback(err)
        } else {
            //console.log("labels", result)
            return callback(null, result)
        }
    })
}

noteModel.prototype.deleteLabel = (id, callback) => {
    console.log("in model", id);

    label.deleteOne({ _id: id.labelID }, (err, result) => {
        if (err) {
            callback(err)
        } else {
            console.log("labels", result)
            return callback(null, result)
        }
    })
}

noteModel.prototype.updateLabel = (changedLabel, callback) => {
    var editLabel = null;
    var labelId = null;
    console.log("in model", changedLabel);

    if (changedLabel != null) {
        editLabel = changedLabel.editLabel;
        labelId = changedLabel.labelID
    } else {
        callback("Pinned note not found")
    }

    label.findOneAndUpdate(
        {
            _id: labelId
        },
        {
            $set: {
                label: editLabel
            }
        },
        (err, result) => {
            if (err) {
                console.log("in modelerr");

                callback(err)
            } else {
                console.log("in modelsuccess");

                return callback(null, changedLabel)
            }
        });
};

module.exports = new noteModel;
