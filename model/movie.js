import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    released: {
        type: String,
        require: true
    },
    rating: {
        type: String,
    },

});

const Movie = new mongoose.model('movie', movieSchema);

export default Movie;
