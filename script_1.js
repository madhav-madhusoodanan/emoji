// this script extracts data and makes a minified version of keyword-emoji list

const fs = require("fs");
const emoji = require("./emoji"); // array

// create a JSON object
var data = JSON.stringify(emoji.map((obj) => obj["char"]));

// convert JSON object to string

// write JSON string to a file
fs.writeFile("emoji.array.js", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
