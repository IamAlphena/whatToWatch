const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const { request } = require("http");
const User = require("../models")


//Login
router.post('/login', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username }, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(500).send()
    }
    if (!user) {
      console.log(err);
      return res.status(404).send()
    }
    req.session.user = user;
    return res.status(200).send()
  })

  user.comparePassword(password, function (err, isMatch) {
    if (isMatch && isMatch == true) {
      foundCallback(user)
    } else {
      notfoundCallback(user)
    }
  });

})



router.post('/searchpage', function (req, res) {
  if (!req.session.user) {
    return res.status(401).send()
  }
  return res.status(200).send('./searchpage')
})

//signing out
router.get('logout', function (req, res) {
  req.session.destroy();
  return req.status(200).send();

})

//Sign Up
router.post('/register', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;

  var newuser = new User();
  newuser.username = username;
  newuser.password = password;
  newuser.firstname = firstname;
  newuser.lastname = lastname;

  newuser.save(function (err, savedUser) {
    if (err) {
      console.log(err);
      return res.status(500).send()
    }
    return res.status(200).send()
  })
})
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});
module.exports = router;