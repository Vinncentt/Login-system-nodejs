/*const express = require("express");
const mysql = require("mysql");

//Create connection

const router = require("./router.js");
const app = express();

// create DB
// app.get('/createdb', (req, res) => {
// createdbb().then((db) => {
//     //   db = mysql.createConnection({
//     //   host: "localhost",
//     //   user: "root",
//     //   password: "123456",
//     // });

//     //connect
//     db.connect((err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("MySql connected...");
//     });
// })
// });

// const createdbb = () => {
//     let sql = "CREATE DATABASE IF NOT EXISTS Quiz_App ";
//     db.query(sql, (err, result) => {
//       if (err) throw err;
//       console.log(result);
//       res.send("Database Created...");
//     });

//     return db
// };

const createdbb = async () => {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
  });
  let sql = "CREATE DATABASE IF NOT EXISTS Quiz_App ";
  await db.query(sql, (err, result) => {
    if (err) throw err;
  });
  return db;
};

module.exports = {
  createdbb,
}; */
