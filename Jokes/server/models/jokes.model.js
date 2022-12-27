const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least ten characters in length."]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least three characters in length."]
    },
},
{ timestamps: true}
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;