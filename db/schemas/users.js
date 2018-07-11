const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    login: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    age: {
        type: Number,
        min: 18,
        max: 70
    }
})

module.exports = mongoose.model('users', userSchema);