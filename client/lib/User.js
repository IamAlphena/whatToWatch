var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  username: { type: String },
  firstname: String,
  lastname: String
});

//Login
router.post('/login', function (req, res) {
  var username = req.body.username;
  var password = req.body.username;

  User.findOne({ username: username, password: password }, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(500).send()
    }
    if (!user) {
      console.log(err);
      return res.status(404).send()
    }
    request.session.user = user;
    return res.status(200).send()
  })

})

router.post('/login', function (req, res) {
  if (!loggedin) {
    return res.status(401).send()
  }
  return res.status(200).send("Welcome to a super secret API")
})
//Sign Up
router.post('/register', function (req, res) {
  var username = req.body.username;
  var password = req.body.username;
  var firstname = req.body.username;
  var lastname = req.body.username;

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

var User = mongoose.model("user_db", userSchema)
module.exports = User;