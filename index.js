const inquirer = require("inquirer");
const util = require("util")
const fs = require("fs");
const generateHTML = require("./utils/generateHTML")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager");
const path = ("./dist/index.html")



let teamArray = [];

function init(){
    //  function createManager() {
     
    //       inquirer.prompt([
    //            {
    //                            type: "input",
    //                            name: "managerName",
    //                            message: "What is your Manager's name?"
    //                        },
     
    //                        {
    //                           type: "input",
    //                           name: "managerID",
    //                           message: "What is your Manager's ID?"
    //                       },
    //                       {
    //                           type: "input",
    //                           name: "managerEmail",
    //                           message: "What is your Manager's email?"
    //                       },
    //                       {
    //                           type: "input",
    //                           name: "managerOffice",
    //                           message: "What is your Manager's office number?"
    //                       },
    //                       {
    //                         type: "list",
    //                         name: "userContinuation",
    //                         message: "What would you like to do?",
    //                         choices: ["Intern", "Engineer", "finish"],
                          
    //                     },
                   
    //       ]).then((answers) => {
    //            console.log(answers)
    //       })
    //  }
    //  createManager()
     

     
     inquirer.prompt([
          {
                          type: "input",
                          name: "name",
                          message: "What is your team member's name?",
                      },
              
                      {
                          type: "list",
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
                          when: (answer) => answer.title === "Engineer",
                          type: "input",
                          name: "github",
                          message: "What is your employee's github username?",
                      },
                      {
                          type: "input",
                          name: "id",
                          message: "Enter the employee's ID:",
                      },
              
                      {
                          when: (answer) => answer.title === "Manager",
                          type: "input",
                          name: "office",
                          message: "Enter in office number.",
                          
                      },

                    {  
                      when: (answer) => answer.title === "Intern",
                      type: "input",
                      message: "Please enter school:",
                      name: "school",
                    },
                  {
                    type: "list",
                    name: "finish",
                    message: "Do you want to finish?",
                    choices: ["yes", "no"],
                },
              
     ]).then((answers) => {
      console.log(answers)
          if (answers.title === "Manager") {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            teamArray.push(manager);
          } if (answers.title === "Engineer") {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);
          } if (answers.title === "Intern") {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern);
          }
          if(answers.finish === "yes"){
            fs.writeFileSync("./dist/index.html", generateHTML(JSON.stringify(teamArray)), "utf-8")
          }
          else{
            init()
          }
        });
    };

    





init()

// const inputPrompt = () => {
//     return inquirer.prompt([

     //        {
     //            type: "input",
     //            name: "name",
     //            message: "What is your team member's name?"
     //        },
    
     //        {
     //            type: "checkbox",
     //            name: "title",
     //            message: "What is your employee's job title?",
     //            choices: ["Manager", "Intern", "Engineer"],
     //        },
    
     //        {
     //            type: "input",
     //            name: "email",
     //            message: "What is your employee's email address?",
     //        },
    
    
     //        {
     //            type: "input",
     //            name: "github",
     //            message: "What is your employee's github username?",
     //        },
     //        {
     //            type: "input",
     //            name: "ID",
     //            message: "Enter the employee's ID:",
     //        },
    
     //        {
     //            type: "input",
     //            name: "office",
     //            message: "What is your employee's office number?",
     //        },
     //    ]
     // }




// async function main() {
//     try {
//         await prompt()

//         for (let i = 0; i < teamArray.length; i++) {
//             teamString = teamString + html.generateCard(teamArray[i]);
//         }

//         let endHTML = html.generateHTML(teamString)


//         writeFileAsync("./dist/index.html", endHTML)

//     } catch (error) {
//         return console.log(error)
//     }

    
   
//     inquirer.prompt(questions).then((answers) => {
//         console.log(answers)
       
//     })


// }

