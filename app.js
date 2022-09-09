const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePages = require("./src/page-template");
const { writeFile } = require("./utils/generateHTML");

const team = [];
const id = [];

const addManager = function () {
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Enter the team manager's name? (required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`please provide the manager's name.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID. (required)",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log(` please provide a number for the Id information.`);
            return false;
          } else {
            const check = id.findIndex((data) => data === idInput);
            if (check == -1) {
              id.push(idInput);
              return true;
            } else {
              console.log(
                ` Please enter a different ID, there is a duplicate.`
              );
            }
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email address. (required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`please provide the manager's email address.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number. (required)",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log(`please provide the manager's office number.`);
            return false;
          }
        },
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      const manager = new Manager(name, id, email, officeNumber);
      team.push(manager);
      // console.log(team)
    });
};

const createTeam = function () {
  return inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "Please select whether to add additional team members.",
      choices: ["Engineer", "Intern", "Finish building team"],
    })
    .then(({ role }) => {
      if(role === 'Engineer'){
          return inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Enter the engineer's name. (required)",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log(`please provide the engineer's name`);
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "id",
                message: "Enter the engineer's ID. (required)",
                validate: (idInput) => {
                  if (isNaN(idInput)) {
                    console.log(
                      ` please provide a number for the Id information.`
                    );
                    return false;
                  } else {
                    const check = id.findIndex((data) => data === idInput);
                    if (check == -1) {
                      id.push(idInput);
                      return true;
                    } else {
                      console.log(
                        ` Please enter a different ID, there is a duplicate.`
                      );
                    }
                  }
                },
              },
              {
                type: "input",
                name: "email",
                message: "Enter the engineer's email information. (required)",
                validate: (emailInput) => {
                  if (emailInput) {
                    return true;
                  } else {
                    console.log(`please provide the engineer's email address`);
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "github",
                message: "Enter the engineer's github username. (required)",
                validate: (githubInput) => {
                  if (githubInput) {
                    return true;
                  } else {
                    console.log(
                      `please provide the engineer's github username`
                    );
                    return false;
                  }
                },
              },
            ])
            .then(({ name, id, email, github }) => {
              const engineer = new Engineer(name, id, email, github);
              team.push(engineer);
              return createTeam(team);
            });
      } else if (role === 'Intern') {
          return inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Enter the intern's name. (required)",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log(`please provide the intern's name.`);
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "id",
                message: "Enter the engineer's ID. (required)",
                validate: (idInput) => {
                  if (isNaN(idInput)) {
                    console.log(
                      ` please provide a number for the Id information.`
                    );
                    return false;
                  } else {
                    const check = id.findIndex((data) => data === idInput);
                    if (check == -1) {
                      id.push(idInput);
                      return true;
                    } else {
                      console.log(
                        ` Please enter a different ID, there is a duplicate.`
                      );
                    }
                  }
                },
              },
              {
                type: "input",
                name: "email",
                message: "Enter the intern's email information. (required)",
                validate: (emailInput) => {
                  if (emailInput) {
                    return true;
                  } else {
                    console.log(`please provide the intern's email address.`);
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "school",
                message: "Enter the intern's school information. (required)",
                validate: (schoolInput) => {
                  if (schoolInput) {
                    return true;
                  } else {
                    console.log(
                      `please provide the intern's school information.`
                    );
                    return false;
                  }
                },
              },
            ])
            .then(({ name, id, email, school }) => {
              const intern = new Intern(name, id, email, school);
              team.push(intern);
              return createTeam(team);
            });
      } else {
        console.log('finished building team')
        return team;
      }
    })
}


addManager()
  .then(createTeam)
  .then((name) => {
    console.log(name);
    return generatePages(name);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
