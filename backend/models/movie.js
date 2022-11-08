const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'Genre',
    }
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;