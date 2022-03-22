const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AssistantSchema = new Schema({
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
        type: String
    },

    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
});

const Assistant = mongoose.model('assistant', AssistantSchema);

module.exports = Assistant;