const router = require("express").Router();
const db = require("../../models");

//Login
// GET - /api/user/login
router.post("/login", function (req, res) {
  var userName = req.body.username;
  var password = req.body.password;

  db.User.findOne({ username: userName }, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!user) {
      console.log(err);
      return res.status(404).send();
    }
    req.session.user = user;
    user.comparePassword(password, function (err, isMatch) {
      if (isMatch) {
        return res.status(200).send("Successfully Logged In");
      } else {
        return res.status(500).send();
      }
    });
  });
});

//signing out
// GET - /api/user/logout
router.get("/logout", function (req, res) {
  req.session.destroy();
  return req.status(200).send();
});

//Sign Up
// GET - /api/user/register
router.post("/register", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;

  var newuser = new db.User();
  newuser.username = username;
  newuser.password = password;
  newuser.firstname = firstname;
  newuser.lastname = lastname;

  newuser.save(function (err, savedUser) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send("Successfully Registered!");
  });
});

module.exports = router;
