const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    showId: {type: mongoose.Types.ObjectId, ref: 'shows', required: true},
    userId: {type: mongoose.Types.ObjectId, ref: 'users', required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true }
})
const Comment = mongoose.model('comments', schema);
module.exports = Comment