const mongoose = require('mongoose');

// Define the schema for the Perfume model
const perfumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Make name required
        trim: true       // Trim extra spaces from the name
    },
    discountedPrice: {
        type: Number,
        required: true, // Make discounted price required
        min: 0          // Ensure it's a positive number
    },
    actualPrice: {
        type: Number,
        required: true, // Make actual price required
        min: 0          // Ensure it's a positive number
    },
    image: {
        type: String,
        required: true   // Store the image file path
    }
}, {
    timestamps: true  // Automatically add createdAt and updatedAt timestamps
});

// Create a model for the Perfume schema
const Perfume = mongoose.model('Perfume', perfumeSchema);

module.exports = Perfume;  // Export the model
