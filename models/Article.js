const mongoose = require('mongoose');

module.exports  = mongoose.model('Article', { 
    title: String,
    author: String,
    views: Number
});