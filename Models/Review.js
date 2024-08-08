const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieId: { 
    type: String, 
    required: true 
  },
  userId: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 
  },
  title: { 
    type: String, 
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  },
});

module.exports = mongoose.model('Review', reviewSchema);
