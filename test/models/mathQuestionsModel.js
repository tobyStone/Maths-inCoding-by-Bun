const mongoose = require('mongoose');
const { Schema } = mongoose;

const helpVideoSchema = new Schema({
    videoSrc: String,
    imgSrc: String,
    videoTitle: String
});

const questionSchema = new Schema({
    Qnumber: Number,
    imgSrc: String,
    imgAlt: String,
    questionText: String,
    answer: String,
    choices: [String]
});

const pageSchema = new Schema({
    url_stub: String,
    description: String,
    helpVideo: helpVideoSchema, // Added help video schema here
    questionData: [questionSchema]
});

const mathQuestionsSchema = new Schema({
    page: pageSchema
});

const MathQuestions = mongoose.model('MathQuestions', mathQuestionsSchema, 'maths_through_coding');

module.exports = MathQuestions;
