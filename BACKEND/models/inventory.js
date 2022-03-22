const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    itemId: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 

    itemName: {
        type: String,
        required: true,
        trim: true
    },

    stock: {
        type: String,
        required: true,
        trim: true
    }, 
    
    photo: {
        type: String
    },

    stockIn: {
        type: String,
        required: true,
        trim: true
    },
    stockOut: {
        type: String,
        required: true,
        trim: true
    },
    unitPrice: {
        type: Number,
        required: true,
        trim: true
    }
});

const Inventory = mongoose.model('inventory', InventorySchema);

module.exports = Inventory;