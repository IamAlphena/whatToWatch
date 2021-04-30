const router = require("express").Router();
const movieRoutes = require("./movie");

// Post routes
router.use("/movie", movieRoutes);

module.exports = router;