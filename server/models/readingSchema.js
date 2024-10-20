const mongoose = require("mongoose");

// Define a schema for questions at each level
const questionSchema = new mongoose.Schema({
  passage: { type: String },
  question: { type: String },
  correct_answer: { type: mongoose.Schema.Types.Mixed },
  level: { type: Number },
});

// Define a schema for levels containing arrays of questions
const levelSchema = new mongoose.Schema({
  level_1: [questionSchema],
  level_2: [questionSchema],
  level_3: [questionSchema],
});

// Define a schema for Reading types (R1, R2, R3)
const readingSchema = new mongoose.Schema({
  id: { type: String, required: true },
  levels: levelSchema,
});

// Create the model
const Reading = mongoose.model("Reading", readingSchema);

module.exports = Reading;
