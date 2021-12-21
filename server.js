const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');
const {v4: uuidv4} = require("uuid");

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views',"views")

//load static assets
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets',express.static(path.join(__dirname, 'public/assets')));

app.use(session({
    secret: uuidv4(),
    resave: 'false',
    saveUninitialized: 'true'
}));

//home route
app.get('/', (req,res) => {
    res.render('base', {ttle: "Login System"})
});

app.listen(port, () => {console.log("Listening to the server on http://localhost:3000")});