const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    item_Id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 

    item_name: {
        type: String,
        required: true,
        trim: true
    }, 

    description: {
        type: String,
        required: true,
        trim: true
    }, 
    
    photo: {
        type: String
    },

    discount_Rate: {
        type: Number,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        trim: true
    },
    
    
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;