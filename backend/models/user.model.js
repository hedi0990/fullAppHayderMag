const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },   
    password: {
        type: String,
        required: true,
    },
    role:{
        type:String,
        default:"vendeur"
    }
});
module.exports = mongoose.model('User', user)