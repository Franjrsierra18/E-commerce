const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number
  },
  iva: {
    type: Number,
    enum:[0.04,0.1,0.21]
  },
  description: String,
  imagePath: String,
  category:{
    type: String,
    required: true
  }
  
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;