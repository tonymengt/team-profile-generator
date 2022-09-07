const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Prompt () {
    this.id = 0;
    this.team = [];
    this.manager
}
Prompt.prototype.addManager = function () {
    this.id ++;
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "Enter the team manager's name? (required)"
        },
        // {
        //     type: 'input',
        //     name: 'id',
        //     message: "Enter your employee ID. (required)"
        // },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email address. (required)"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number. (required)"
        }
    ])
    .then(({name,email, officeNumber}) => {

        this.manager = new Manager(name,this.id,email,officeNumber);
        this.team.push(this.manager);
        // console.log(this.team)

        this.createTeam();
    });
}

Prompt.prototype.createTeam = function () {
    this.id ++;
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please select a Engineer or Intern to be added to the team.",
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ])
    .then(({role}) => {
        if(role === 'Engineer'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter engineer's name."
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter engineer's email information."
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Enter the engineer's github username."
                }
            ])
            .then(({name, email, github}) => {
                const engineer = new Engineer(name, this.id,email,github)
                this.team.push(engineer);
                console.log(this.team)
                this.createTeam()
            }) 
        } else if(role === 'Intern'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter intern's name."
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter intern's email information."
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "Enter the intern's school information."
                }
            ])
            .then(({name, email, school}) => {
                const intern = new Intern(name, this.id,email,school)
                this.team.push(intern);
                console.log(this.team)
                this.createTeam()
            })
        } else {
            return `You have built out your team!`
        }
    })
}

module.exports = Prompt;