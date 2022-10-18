"use strict";
exports.__esModule = true;
var inquirer = require('inquirer');
inquirer
    .prompt([
    {
        type: "input",
        name: "user_text",
        message: "Enter Tour Text?"
    },
])
    .then(function (answers) {
    var phla = answers.user_text;
    var toor = phla.split(" ");
    var txt = "";
    for (var x in toor) {
        txt += toor[x];
    }
    console.log("The total characters in the paragraph excluding white spaces are:");
    console.log(txt.length);
});
