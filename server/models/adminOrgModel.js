const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminOrgSchema = new Schema({
    
    organizationName: {
        type: String,
        required: true
    },
    regNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPw: {
        type: String,
        required: true
    }

}, {timestamps:true})

module.exports = mongoose.model('AdminOrg',adminOrgSchema)