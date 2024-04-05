var configValues = require('../config/config.json');

module.exports = {

    getDbConnectionString: function () {
        return 'mongodb+srv://' + configValues.uname
            + ':' + configValues.pwd
            + '';
    }


}

