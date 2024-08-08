const ReviewSchema = require("../Models/Review")

exports.addReview = async (req, res) => {
    try {
      const { movieId } = req.params;
      const {  userId,rating, title, content } = req.body;

      const review = new ReviewSchema({
        movieId,
        userId, 
        rating,
        title,
        content,
      });
  
      await review.save();
      res.status(201).json(review);
    } catch (error) {
    res.status(500).json("server error");
  }
  };

  exports.updateReview = async (req, res) => {
    try {
      const { reviewId } = req.params;
      const { rating, title, content } = req.body;
  
      let review = await ReviewSchema.findById(reviewId);
    
      review.rating = rating || review.rating;
      review.title = title || review.title;
      review.content = content || review.content;
  
      await review.save();
      res.status(200).json(review);
    } catch (error) {
        res.status(500).json("server error");
      }
  };
  
  exports.deleteReview = async (req, res) => {
    try {
      const { reviewId } = req.params;
  
      const review = await ReviewSchema.findByIdAndDelete(reviewId);
        console.log(review)
      res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json("server error");
      }
  };
  