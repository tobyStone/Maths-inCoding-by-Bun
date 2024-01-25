var configValues = require('../config/config.json');

module.exports = {

    getDbConnectionString: function () {
        return 'mongodb+srv://' + configValues.uname
            + ':' + configValues.pwd
            + '@cluster0.ntuqn.mongodb.net/maths_through_coding?retryWrites=true&w=majority';
    }


}