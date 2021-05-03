const router = require("express").Router();
const movieRoutes = require("./movie");

// Post routes
router.use("/movie", movieRoutes);

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;