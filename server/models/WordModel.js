const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  group: { type: String, required: true },
  word: { type: String, required: true },
  mean: { type: String, required: true }
});

const Word = mongoose.model('Word', WordSchema);

module.exports = Word;
