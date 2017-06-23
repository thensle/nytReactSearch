//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
    required: true, 
  }, 
  author: {
    type: String,
    trim: true,
    required: false
  },
  url: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  date: {
    type: Date
  }
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;