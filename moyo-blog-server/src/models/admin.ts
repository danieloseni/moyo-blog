export {}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SocialsSchema = new Schema({
    type: {
        type: String
    },
    handle: {
        type: String
    },
    link: {
        type: String
    }
})

const AdminSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String
    },
    email: {
        type: String,

    },
    password: {
        type: String
    },
    about: {
        type: String
    },
    socials: [SocialsSchema]
})

const Admin = mongoose.model('admin', AdminSchema)

module.exports = Admin