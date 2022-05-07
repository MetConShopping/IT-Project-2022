const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ComplaintSchema = new Schema({
    complaintID: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 

    cusName: {
        type: String,
        required: true,
        trim: true
    },

    date: {
        type: String,
        required: true,
        trim: true
    }, 

    email: {
        type: String,
        required: true,
        trim: true,
    },
    
    description: {
        type: String,
        required: true,
        trim: true
    },

    photo: {
        type: String
    }
});

const Complaint = mongoose.model('complaint', ComplaintSchema);

module.exports = Complaint;