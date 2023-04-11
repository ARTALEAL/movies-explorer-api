const router = require('express').Router();
const {
  getMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  createFilmValidation,
} = require('../middlewares/validations');

router.get('/movies', getMovies);
router.post('/movies', createFilmValidation, addMovie);
router.delete('/movies/:movieId', deleteMovie);

module.exports = router;
