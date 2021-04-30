const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/movie"
router
  .route("/")
  .get(movieController.findAll)
  .post(movieController.create);

// Matches with "/api/movie/:id"
router
  .route("/:id")
  .get(movieController.findById)
  .put(movieController.update)
  .delete(movieController.remove);

module.exports = router;