const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const investorsSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    Middle_name:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    indigine:{
        type: String,
        required: true
    },
    signature:{
        type: String,
        required: true
    },
    nin:{
        type: String,
        required: true
    },
    bvn:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date_of_birth:{
        type: String,
        required: true
    },
    next_of_kin_number:{
        type: String,
        required: true
    },
    next_of_kin_name:{
        type: String,
        required: true
    },
    next_of_kin_nin:{
        type: String,
        required: true
    },
    next_of_kin_bvn:{
        type: String,
        required: true
    },
    next_of_kin_image:{
        type: String,
        required: true
    }


});
module.exports = mongoose.model('Investors', investorsSchema);