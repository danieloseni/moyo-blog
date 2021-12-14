"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
const User = mongoose.model('user', UserSchema);
module.exports = User;
