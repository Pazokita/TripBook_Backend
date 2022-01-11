var mongoose = require('mongoose')

const URI_BDD = 'mongodb+srv://admin:21Avr1986@cluster0.uamo1.mongodb.net/TripBook?retryWrites=true&w=majority';

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