const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Appetizer', 'Main Course', 'Dessert', 'Beverage']
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    isAvailable: {
        type: Boolean,
        default: true
    },
    imageUrl: String,
    spiceLevel: {  // ← ADD THIS
        type: String,
        enum: ['Not Spicy', 'Medium Spicy', 'Spicy'],
        default: 'Not Spicy'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Menu', menuSchema);