const inquirer = require("inquirer");
const util = require("util")
const fs = require("fs");

const markUpProfile = require("./utils/generateMarkdown")

const engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const manager = require("./lib/Manager");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

async function main() {
    try {
        await prompt()

        for (let i = 0; i < teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i]);
        }

        let endHTML = html.generateHTML(teamString)

         
        writeFileAsync("./dist/index.html", endHTML)


inquirer.prompt(questions).then((answers)=> {
    console.log(answers)
}) 

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






    }
