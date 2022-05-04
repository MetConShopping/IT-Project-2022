const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    supid: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 

    fullname: {
        type: String,
        required: true,
        trim: true
    },

    address: {
        type: String,
        required: true,
        trim: true
    }, 
    
    experience: {
        type: Number,
        required: true,
        trim: true
    },
    itempurchesed: {
        type: String,
        required: true,
        trim: true
    },
    photo: {

        type: String

    }
    
    
});

const Supplier = mongoose.model('supplier', SupplierSchema);

module.exports = Supplier;