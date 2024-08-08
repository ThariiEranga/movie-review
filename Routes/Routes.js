const router = require("express").Router();
const {addmovie,movies,getmoviebyId,updatemovie,deletemovie,addwatched,removewatched,watchedlist,filtermovies} =require("../Controllers/Movies")
const {addReview,updateReview,deleteReview} = require("../Controllers/Reviews")

router.post('/movies', addmovie);
router.get('/allmovies',movies);
router.get('/movies', filtermovies);
router.get('/movies/:id', getmoviebyId);
router.put('/movies/:id', updatemovie);
router.delete('/movies/:id', deletemovie);
router.get('/watchlist', watchedlist);
router.post('/watchlist/:id', addwatched);
router.delete('/watchlist/:id', removewatched);

router.post('/:movieId/reviews', addReview);
router.put('/reviews/:reviewId', updateReview);
router.delete('/reviews/:reviewId',deleteReview);

module.exports = router;