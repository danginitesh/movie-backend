import express from "express";
const router = express.Router();
import {
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
} from '../controllers/movieController.js'

router.get('/movies', getMovie);
router.post('/create-movie', createMovie);
router.put('/update-movie', updateMovie);
router.delete('/delete-movie', deleteMovie);

export default router;
