const router = require("express").Router();
const movieRoutes = require("./movie");

// Post routes
router.use("/movie", movieRoutes);

router.post('signup', (request, response) =>{
    response.send('send');
})
module.exports = router;