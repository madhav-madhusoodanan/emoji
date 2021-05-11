// this script extracts data and makes a minified version of keyword-emoji list

const fs = require("fs");
const emoji = require("./emoji"); // array
const keywords = require("./keywords"); // object

// create a JSON object
let new_keywords = {};
emoji.forEach((obj) => {
  var unicode = obj.codes.toLowerCase().split(" ").join("-");
  var keyword = keywords[unicode];
  if (keyword) new_keywords[keyword.shortname] = obj.char;
});

// convert JSON object to string
const data = JSON.stringify(new_keywords);

// write JSON string to a file
fs.writeFile("emoji.mini.json", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
