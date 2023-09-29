import Movie from "../model/movie.js"

const getMovie = async (req, res) => {
    try {
        const movieList = await Movie.find({});

        return res.send(movieList);
    } catch (error) {
        console.log("🚀 ~ file: movieController.js:7 ~ getMovie ~ error:", error)
        res.send(error)
    }
}


const createMovie = async (req, res) => {
    console.log("🚀 ~ file: movieController.js:16 ~ createMovie ~ req:", req.body)
    try {
        const { movieName = '', image = '', releasedDate = '', movieRating = '' } = req.body;
        if(!movieName || !image || !releasedDate || !movieRating) {
            return res.status(400).send("Bad Request")
        }

        const movie = await Movie.collection.insertOne(req.body)
        
        if(!movie) {
            return res.send("insertion failed");
        }

        return res.send(movie);
    } catch (error) {
        console.log("🚀 ~ file: movieController.js:7 ~ createMovie ~ error:", error)
        res.send(error)
    }
}

const updateMovie = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("🚀 ~ file: movieController.js:7 ~ updateMovie ~ error:", error)
        res.send(error)
    }
}

const deleteMovie = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("🚀 ~ file: movieController.js:7 ~ deleteMovie ~ error:", error)
        res.send(error)
    }
}

export {
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}
