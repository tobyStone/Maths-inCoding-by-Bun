const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema({
    Qnumber: Number,
    imgSrc: String,
    imgAlt: String,
    questionText: String,
    answer: String,
});

const pageSchema = new Schema({
    url_stub: String,
    description: String,
    questionData: [questionSchema], // Embed the question schema as an array
});

const mathQuestionsSchema = new Schema({
    page: [pageSchema], // Embed the page schema as an array
});

const MathQuestions = mongoose.model('MathQuestions', mathQuestionsSchema, 'maths_through_coding'); // Use a singular name for the model

module.exports = MathQuestions;
