/**
 * Created by Rye on 1/12/2016.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName:  { type: String, require: '{PATH} is required!' },
    lastName:  { type: String, require: '{PATH} is required!' },
    username: {
        type: String,
        required: '{PATH} is required!',
        unique:true
    },
    salt:  { type: String, require: '{PATH} is required!' },
    hashed_pwd:  { type: String, require: '{PATH} is required!' },
    roles: [String]
});