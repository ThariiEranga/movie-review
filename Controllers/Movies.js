const MovieSchema = require("../Models/Movie");

exports.addmovie = async (req, res) => {
  try {
    const { title, description, release_year, genre, director } = req.body;

    if (!title || !description || !release_year || !genre || !director) {
      return res.status(400).json({ error: "All fields are require" });
    }

    const newmovie = new MovieSchema({
      title,
      description,
      release_year,
      genre,
      director,
    });
    await newmovie.save();
    console.log(newmovie);
    res.status(201).json("movie added");
  } catch (error) {
    res.status(500).json("server error");
  }
};

exports.movies = async (req, res) => {
  try {
    const movies = await MovieSchema.find();

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json("server error");
  }
};

exports.getmoviebyId = async (req, res) => {
  try {
    const { id } = req.params.id;

    const movie = await MovieSchema.findById(id);

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json("server error");
  }
};

exports.updatemovie = async (req, res) => {
  try {
    const { id } = req.params.id;

    const movie = await MovieSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(movie);
    res.status(200).json("movie updated");
  } catch (error) {
    res.status(500).json("server error");
  }
};

exports.deletemovie = async (req, res) => {
  try {
    const { id } = req.params.id;

    const movie = await MovieSchema.findByIdAndDelete(id);
    console.log(movie);
    res.status(200).json("movie deleted");
  } catch (error) {
    res.status(500).json("server error");
  }
};

exports.addwatched = async (req, res) => {
  try {
    const { id } = req.params.id;

    const movie = await MovieSchema.findByIdAndUpdate(
      id,
      { watched: true },
      { new: true }
    );

    res.status(200).json("movie marked as watched");
  } catch (error) {
    res.status(500).json("server error");
  }
};

exports.removewatched = async (req, res) => {
  try {
    const { id } = req.params.id;

    const movie = await MovieSchema.findByIdAndUpdate(
      id,
      { watched: false },
      { new: true }
    );

    res.status(200).json("movie removed from watched");
  } catch (error) {
    res.status(500).json("server error");
  }
};

exports.watchedlist = async (req, res) => {
  try {
    movies = await MovieSchema.find({ watched: true });

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json("server error");
  }
};

exports.filtermovies = async (req, res) => {
  const { title, genre, release_year, director } = req.query;
  const filter = {};

  if (title) filter.title = { $regex: title, $options: "i" };
  if (genre) filter.genre = { $regex: genre, $options: "i" };
  if (release_year) filter.release_year = release_year;
  if (director) filter.director = { $regex: director, $options: "i" };

  try {
    const movies = await MovieSchema.find(filter);
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
