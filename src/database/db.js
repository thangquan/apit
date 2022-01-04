'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456789',
  database : 'northwind'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;