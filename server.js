const express = require("express");
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const routes = require("./routes");
const crypto = require('crypto');
const authTokens = {};
const app = express();
const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/movieDB");

// // Start the API server
// app.listen(PORT, function () {
//   console.log(`==> API Server now listening on PORT ${PORT}!`);
// });

/* Noors new code */
const users = [
  // This user is added to the array to avoid creating new user on each restart
  {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@email.com',
      // This is the SHA256 hash for value of `password`
      password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='
  }
];

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
}

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString('hex');
}

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use((req, res, next) => {
  const authToken = req.cookies['AuthToken'];
  req.user = authTokens[authToken];
  next();
});

app.engine('hbs', exphbs({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = getHashedPassword(password);

  const user = users.find(u => {
      return u.email === email && hashedPassword === u.password
  });

  if (user) {
      const authToken = generateAuthToken();

      authTokens[authToken] = email;

      res.cookie('AuthToken', authToken);
      res.redirect('/protected');
      return;
  } else {
      res.render('login', {
          message: 'Invalid username or password',
          messageClass: 'alert-danger'
      });
  }
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const { email, firstName, lastName, password, confirmPassword } = req.body;

  if (password === confirmPassword) {
      if (users.find(user => user.email === email)) {

          res.render('register', {
              message: 'User already registered.',
              messageClass: 'alert-danger'
          });

          return;
      }

      const hashedPassword = getHashedPassword(password);

      users.push({
          firstName,
          lastName,
          email,
          password: hashedPassword
      });

      res.render('login', {
          message: 'Registration Complete. Please login to continue.',
          messageClass: 'alert-success'
      });
  } else {
      res.render('register', {
          message: 'Password does not match.',
          messageClass: 'alert-danger'
      });
  }
});

app.get('/protected', (req, res) => {
  if (req.user) {
      res.render('protected');
  } else {
      res.render('login', {
          message: 'Please login to continue',
          messageClass: 'alert-danger'
      });
  }
});

app.listen(3000);
