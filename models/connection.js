var mongoose = require('mongoose');
require ('dotenv').config();

const URI_BDD = process.env.MONGO_URI;

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(URI_BDD,
    options,
    function(err){
        if (err){
            console.log(err)
        } else {
        console.log('___BDD OK ___')
        }
    }
)

module.exports = mongoose;