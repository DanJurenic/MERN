const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("All systems are a go!"))
    .catch(err=>console.log("Critical error, could not connect.", err));