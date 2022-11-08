const express = require('express');
const moviesController = require('../controllers/moviesController');

const router = express.Router();

router.get('/', moviesController.movie_list );
router.post('/addmovie/', moviesController.movie_submit);
router.delete('/:movieID', moviesController.movie_delete);

module.exports = router;