const inquirer = require('inquirer');
const questions = [
    {
        type:"input",
        name:"name",
        message:"what is your name"
    }
];
function userprompt(){
    inquirer
    .prompt(questions)

    .then(answers => {
        console.log (`hello ${answers.name}`);
    });
}
userprompt();