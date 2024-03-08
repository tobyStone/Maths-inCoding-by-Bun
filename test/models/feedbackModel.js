const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    feedbackName: {
        type: String,
        required: [true, 'Name is required'],
    },
    emailAddress: {
        type: String,
        required: [true, 'Email address is required'],
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    feedback: {
        type: String,
        required: [true, 'Feedback is required']
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});


const Feedback = mongoose.model('Feedback', feedbackSchema);


module.exports = Feedback;


