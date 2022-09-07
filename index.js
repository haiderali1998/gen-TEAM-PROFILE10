const inquirer = require("inquirer");
const util = require("util")
const fs = require("fs");

const markUpProfile = require("./utils/generateMarkdown")

const engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const manager = require("./lib/Manager");


const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your team member's name?"
    },

    {
        type: "checkbox",
        name: "title",
        message: "What is your employee's job title?",
        choices: ["Manager", "Intern", "Engineer"],
    },

    {
        type: "input",
        name: "email",
        message: "What is your employee's email address?",
    },


    {
        type: "input",
        name: "github",
        message: "What is your employee's github username?",
    },
    {
        type: "input",
        name: "ID",
        message: "Enter the employee's ID:",
    },

    {
        type: "input",
        name: "office",
        message: "What is your employee's office number?",
    },
];










function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
        const output = (error) ? 'error' : 'success'
        error ? console.error(error) : console.log("Your README.md has been created")
    })
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = markdown(answers);
        console.log(answers);
        writeToFile("./dist/index.html", data);
    })
}

init();
