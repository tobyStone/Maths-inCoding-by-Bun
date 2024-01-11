var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var layoutSchema = new Schema({

    page = {
        url_stub: String,
        description: String,
        sections: [
            {
                id: String,
                title: String,
                picture: String,
                imgAlt: String,
                link: String,
            }]
    },
});

var layouts = mongoose.model('layouts', layoutSchema);

module.exports = layouts;
