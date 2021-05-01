const express = require('express');
const router = require("express").Router();
const signupForm = require('../models/signupForm');
const movieRoutes = require("./movie");

// Post routes
router.use("/movie", movieRoutes);

router.post('signup', (request, response) =>{
    const signedupUser = new signupFormCopy({
        fullname:request.body.fullname,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
    })
})
module.exports = router;