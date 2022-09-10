const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./passport-setup');

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }))
// View engine setup
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// Auth middleware that checks if the user is logged in
let username;
let lastname;
let picture;
const isLoggedIn = (req, res, next) => {
    if (req.user) {
      username = req.user.name.givenName
      lastname = req.user.name.familyName
      picture = req.user.photos[0].value
      console.log(lastname)

        next();
    } else {
        res.sendStatus(401);
    }
}

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Example protected and unprotected routes
app.get('/', (req, res) => res.render('login'))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/home', isLoggedIn, (req, res) => 

// res.send(`Welcome mr ${req.user.displayName}!`)
res.render('home', { username: username ,picture : picture , lastname : lastname})
)
app.get('/download', isLoggedIn, (req, res) => 
res.render('download')
)

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  }
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))