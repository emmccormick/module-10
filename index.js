const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamArr = [];


function createEmployees(){
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: 'What is your name?'
                },
                {
                    type: 'text',
                    name: 'id',
                    message: 'What is your employee ID?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is your email?'
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'What type of employee are you creating?',
                    choices: ["Manager", "Engineer", "Intern"]
                }
            ])
            .then(answers => {
                switch(answers.role) {
                    case "Manager": 
                        // 
                        inquirer
                            .prompt([
                                {
                                    type: 'text',
                                    name: 'officeNumber',
                                    message: 'What is your office number?'
                                },
                            ])
                            .then(managerAnswer => {
                                var newManager = new Manager(answers.name, answers.id, answers.email, managerAnswer.officeNumber); 
                                teamArr.push(newManager);
                                promptNextAction();
                            })
                        break;
                    case "Engineer":
                        inquirer
                            .prompt([
                                {
                                    type: 'text',
                                    name: 'github',
                                    message: 'What is their github username?'
                                },
                            ])
                            .then(engineerAnswer => {
                                var newEngineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswer.github); 
                                teamArr.push(newEngineer);
                                promptNextAction();
                            })
                        break;
                    case "Intern":
                        inquirer
                            .prompt([
                                {
                                    type: 'text',
                                    name: 'school',
                                    message: 'What is the name of their school?'
                                },
                            ])
                            .then(internAnswer => {
                                var newIntern = new Intern(answers.name, answers.id, answers.email, internAnswer.school); 
                                teamArr.push(newIntern);
                                promptNextAction();
                            })
                        break;
                }
        
        })
    }

    function promptNextAction(){
        inquirer
            .prompt({
                type: 'list',
                name: 'anotherEmployee',
                message: "Do you want to add another employee?",
                choices: ["yes", "no"]
            })
            .then(answer => {
                if (answer.anotherEmployee === "yes") {
                    createEmployees()
                } else {
                    // generate html with team members
                    createTeamHtml();
                }
                
            })
    }
   
    function createTeamHtml() {
        console.log("creating team...");
        console.log(teamArr)
        const htmlString = teamArr.map( member => `<pre>${JSON.stringify(member)} </pre>`).join("")
        console.log(htmlString)
        fs.writeFileSync(outputPath, htmlString)
    }



createEmployees();



