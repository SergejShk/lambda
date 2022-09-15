const inquirer = require("inquirer");
const { addUserDB, getUserByName } = require("./operationsDB");

const searchUserByName = async () => {
  try {
    const response = await inquirer.prompt([
      {
        message: "Enter a name to search: ",
        name: "query",
      },
    ]);

    if (response.name === "") {
      requestSearchUser();
      return;
    }

    const [result] = await getUserByName(response.query);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

const requestSearchUser = async () => {
  try {
    const response = await inquirer.prompt([
      {
        type: "confirm",
        message: "Would you to search user in DB?: ",
        name: "isNeedSearch",
      },
    ]);

    if (!response.isNeedSearch) {
      return;
    }

    searchUserByName();
  } catch (error) {
    console.log(error.message);
  }
};

const requestAge = async (userData) => {
  try {
    const response = await inquirer.prompt([
      {
        type: "number",
        message: "Enter user's age: ",
        name: "age",
      },
    ]);

    const newUser = { ...userData, ...response };

    addUserDB(newUser);

    requestName();
  } catch (error) {
    console.log(error.message);
  }
};

const requestGender = async (userData) => {
  try {
    const response = await inquirer.prompt([
      {
        type: "list",
        message: "Enter user's gender: ",
        name: "gender",
        choices: ["male", "female"],
      },
    ]);

    const newUserData = { ...userData, ...response };

    requestAge(newUserData);
  } catch (error) {
    console.log(error.message);
  }
};

const requestName = async () => {
  try {
    const response = await inquirer.prompt([
      {
        message: "Enter user's name: ",
        name: "name",
      },
    ]);

    if (response.name === "") {
      requestSearchUser();
      return;
    }

    requestGender(response);
  } catch (error) {
    console.log(error.message);
  }
};

requestName();
