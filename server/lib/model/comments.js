const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    comment_id: {
        type: String,
        required: true
    },
    comment_text: {
        type: String,
        required: true
    },
    parent_id: {
        type: Number,
        required: true,
        default : 0
    }
});


module.exports = mongoose.model('Comments', CommentsSchema);
