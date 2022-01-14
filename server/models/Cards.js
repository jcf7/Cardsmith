const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const CardModel = mongoose.model("cards", CardSchema);
module.exports = CardModel;