const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PromotionSchema = new Schema({
    item_name: {
        type: String,
        required: true,
        trim: true
    }, 

    quantity: {
        type: Number,
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
    prior_price: {
        type: Number,
        required: true,
        trim: true
    },
    present_price: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    }
});

const Promotion = mongoose.model('promotion', PromotionSchema);

module.exports = Promotion;