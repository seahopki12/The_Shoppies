const router = require("express").Router();
const movieRoutes = require("./movies");

// Post routes
router.use("/movies", movieRoutes);

module.exports = router;
