const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const router = require("./router.js");
const mysql = require('mysql');
const database = require("mime-db");

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    database : 'Quiz_App'
});

//connect 
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('mysql connected...');
});

const app = express();

// create db
app.get('/createdb', (req, res) => {
    let sql = "CREATE DATABASE IF NOT EXISTS Quiz_App";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('Database created...');
    });
});

// create Table 
app.get('/createtable', (req, res) => {
    let sql =
      "CREATE TABLE users(id int AUTO_INCREMENT,first_name VARCHAR(50),last_name VARCHAR(50), email VARCHAR(100), password VARCHAR(100), role int, PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Users table created...');
    });
});

// drop table
app.get('/droptable', (req, res) => {
    let sql = "DROP TABLE users";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('users table deleted...');
    })
});


const port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

//load static assets
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use(
  session({
    secret: uuidv4(),
    resave: "false",
    saveUninitialized: "true",
  })
);

app.use("/route", router);
//home route
app.get("/", (req, res) => {
  res.render("base", { ttle: "Login System" });
});



app.listen(port, () => {
  console.log("Listening to the server on http://localhost:3000");
});
