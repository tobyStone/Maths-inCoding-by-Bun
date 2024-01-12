var sections = require('./models/linkedPage');
var bodyParser = require('body-parser');
const { get } = require('mongoose');


module.exports = function(app) {


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/', function(req, res) {

        //     CODE IN HERE FOR ITERATING THROUGH PAGES VARIABLE
        // USING URL STUB AND LINK
        //TO GET POPULATION OF EACH PAGE
        //LIKE THIS, BUT MORE... var todos = Todos.findOne().sort('-_id').exec({ todos },
   //         function(){.
  //                  if(err) throw err;    }
                    res.render('structure');
  
        
     
    });

  

        
}