const Movie = require('../models/movie');
const { BadRequestError } = require('../errors/BadRequestError');
const { NotFoundError } = require('../errors/NotFoundError');
const { ForbiddenError } = require('../errors/ForbiddenError');

function getMovies(req, res, next) {
  const owner = req.user._id;
  Movie
    .find({ owner })
    .then((movies) => {
      if (!movies || movies.length === 0) {
        res.send('Сохраненных фильмов не найдено');
      }
      return res.send(movies);
    })
    .catch(next);
}

function addMovie(req, res, next) {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((newMovie) => res.send(newMovie))
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        next(new BadRequestError('Неверные данные'));
      } else {
        next(err);
      }
    });
}
