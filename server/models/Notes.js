const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema 
({
    user:  //so that a user can see only his notes, not anybosy else's
      {
        type: Schema.ObjectId,
        ref: 'User'
      },
     title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now()
      },
      updatedAt: {
        type: Date,
        default: Date.now()
      }
    





})

module.exports = mongoose.model('Note', NoteSchema)