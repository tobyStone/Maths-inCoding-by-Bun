const mongoose = require('mongoose');

const { Schema } = mongoose;

const sectionSchema = new Schema({
    id: String,
    title: String,
    imgSrc: String,
    imgAlt: String,
    link: String,
});

const pageSchema = new Schema({
    url_stub: String,
    description: String,
    sections: [sectionSchema], // Embed the section schema as an array
});

const layoutSchema = new Schema({
    page: pageSchema,
});

const Layout = mongoose.model('Layout', layoutSchema, 'maths_through_coding'); // Use a singular name for the model

module.exports = Layout;



