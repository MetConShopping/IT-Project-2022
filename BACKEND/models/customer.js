const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    nic: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 

    name: {
        type: String,
        required: true,
        trim: true
    },

    age: {
        type: Number,
        required: true,
        trim: true
    }, 
    
    gender: {
        type: String,
        required: true,
        trim: true
    },

    photo: {
        type: String,
        required: false,
    },
    
    address: {
        type: String,
        required: true,
        trim: true
    },

    contactNo: {
        type: Number,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    }
});

const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer;