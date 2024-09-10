const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    // quantity: {
    //     type: Number,
    //     required: true
    // },
    specifications: {
        type: String
        // required: false,
        // trim: true
        // max: 5000
    },
    description: {
        type: String,
        required: true,
        trim: true
        // max: 5000
    },
    shippingCost: {
        type: Number,
    },
    offer: { type:Number },
    productPictures: [
        { img: {type: String} }
    ],
    // reviews: [
    //     {
    //         userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //         review: String
    //     }
    // ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    createBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    updatedAt: Date

}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);