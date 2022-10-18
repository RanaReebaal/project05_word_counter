export { }
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: "input",
      name: "user_text",
      message: "Enter Tour Text?"
    },
  ])
  .then((answers) => {
    let phla = answers.user_text;
    let toor = phla.split(" ");
    let txt = "";
    for (let x in toor) {
      txt += toor[x];
    }
    console.log("The total characters in the paragraph excluding white spaces are:")
    console.log(txt.length)
  });
