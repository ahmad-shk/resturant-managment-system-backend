const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Product ka naam lazmi hai"] 
    },
    price: { 
        type: Number, 
        required: [true, "Price batana zaroori hai"] 
    },
    category: { 
        type: String, 
        required: [true, "Category batana zaroori hai"] 
    },
    image: { 
        type: String, 
        required: [true, "Product ki image ka URL lazmi hai"] 
    },
    description: { 
        type: String, 
        required: [true, "Description likhna lazmi hai"] 
    },
    isAvailable: { 
        type: Boolean, 
        required: [true, "Availability status batana zaroori hai"],
        default: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);