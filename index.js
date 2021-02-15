const fs = require("fs");
const inquirer = require("inquirer");
const employeeQuestions = require("./src/employeeQuestions");
const managerQuestions = require("./src/managerQuestions");
const engineerQuestions = require("./src/engineerQuestions");
const internQuestions = require("./src/internQuestions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/generateHtml")

var employees = []

const askQuesitons = async () => {
    while (true) {
        var addEmployee = await inquirer.prompt(employeeQuestions)
        .then(async answers => {
            if (answers["employee-role"] === "Manager") {
                return await inquirer.prompt(managerQuestions)
                .then(roleAnswers => {
                    let name = answers["employee-name"];
                    let id = answers["employee-id"];
                    let email = answers["employee-email"];
                    let office = roleAnswers["office-number"];
                    employees.push(new Manager(name, id, email, office));
                    if (roleAnswers["new-user"] === true) {
                        return 1;
                    }
                    return 0;
                })
                .catch(error => console.log(error));
            }
            else if (answers["employee-role"] === "Engineer") {
                return await inquirer.prompt(engineerQuestions)
                .then(roleAnswers => {
                    let name = answers["employee-name"];
                    let id = answers["employee-id"];
                    let email = answers["employee-email"];
                    let github = roleAnswers["github-name"];
                    employees.push(new Engineer(name, id, email, github));
                    if (roleAnswers["new-user"] === true) {
                        return 1;
                    }
                    return 0;
                })
                .catch(error => console.log(error));
            }
            else {
                return await inquirer.prompt(internQuestions)
                .then(roleAnswers => {
                    let name = answers["employee-name"];
                    let id = answers["employee-id"];
                    let email = answers["employee-email"];
                    let school = roleAnswers["school-name"];
                    employees.push(new Intern(name, id, email, school));
                    if (roleAnswers["new-user"] === true) {
                        return 1;
                    }
                    return 0;
                })
                .catch(error => console.log(error));
            }
        })
        .catch(error => console.log(error));
        if (addEmployee === 0) {
            break;
        }
    }
}

const start = async () => {
    await askQuesitons()
    .then(() => {
        // generateHtml(employees);
        fs.writeFile("./dist/index.html", generateHtml(employees), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });
}

start();