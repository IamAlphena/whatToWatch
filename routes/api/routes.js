const express = require('express');
const router = require("express").Router();
const signupForm = require('../models/signupForm');
const movieRoutes = require("./movie");

// Post routes
router.use("/movie", movieRoutes);

router.post('signup', (request, response) =>{
    const signedupUser = new signupFormCopy({
        fullname:requestbody.fullname,
        username:requestbody.username,
        email:requestbody.email,
        password:requestbody.password,
    })
})
module.exports = router;