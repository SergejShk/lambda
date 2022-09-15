const fs = require("fs/promises");
const path = require("path");

const usersPath = path.join(__dirname, "./db.json");

const getUsersDB = async () => {
  try {
    const data = await fs.readFile(usersPath);

    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
};

const addUserDB = async (user) => {
  try {
    const usersData = await getUsersDB();
    usersData.push(user);

    fs.writeFile(usersPath, JSON.stringify(usersData, null, 2));
  } catch (error) {
    console.log(error.message);
  }
};

const getUserByName = async (userName) => {
  try {
    const usersData = await getUsersDB();
    const result = usersData.filter((user) => user.name === userName);

    if (result.length === 0) {
      return ["No user found with the given name"];
    }

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getUsersDB,
  addUserDB,
  getUserByName,
};
