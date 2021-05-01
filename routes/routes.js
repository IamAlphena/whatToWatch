const express = require('express');
const router = require("express").Router();
const signupForm = require('../models/signupForm');
const movieRoutes = require("./api/movie");

// Post routes
router.use("/movie", movieRoutes);

router.post('signup', (request, response) =>{
    const signedupUser = new signupFormCopy({
        fullname:request.body.fullname,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
    })
    signedupUser.save()
    .then(data =>{
        response.json(data);
    })
    .catch(error =>{
        response.json(error);
    })

})

router.get('/signin')
module.exports = router;