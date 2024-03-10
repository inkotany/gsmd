const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    names: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = { Student };