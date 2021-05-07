const router = require("express").Router();

// Register routes
router.use("/movie", require("./movie"));
router.use("/user", require("./user"));

module.exports = router;
