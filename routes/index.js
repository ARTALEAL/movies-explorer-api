const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');
const { createUser, login } = require('../controllers/users');
const {
  singUp,
  signIn,
} = require('../middlewares/validations');

// open Routes
router.post('/signup', singUp, createUser);
router.post('/signin', signIn, login);

// Private routes
router.use('/', require('./users'));
router.use('/', require('./movies'));

router.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
