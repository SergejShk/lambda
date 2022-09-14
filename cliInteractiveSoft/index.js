const readline = require("readline");
const {
  sortWordsByAlphabet,
  sortNumbersByIncrease,
  sortNumbersByDecrease,
  sortWordsByLength,
  sortWordsByUnique,
  sortByUnique,
} = require("./operations");
const { optionsOperations } = require("./optionsOperations");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dataString = [];

const selectOperation = () => {
  rl.question(optionsOperations, (value) => {
    if (value === "exit") {
      rl.close();
      return;
    }
    switch (value) {
      case "1":
        console.log(sortWordsByAlphabet(dataString));
        requestEnterString();
        break;

      case "2":
        console.log(sortNumbersByIncrease(dataString));
        requestEnterString();
        break;

      case "3":
        console.log(sortNumbersByDecrease(dataString));
        requestEnterString();
        break;

      case "4":
        console.log(sortWordsByLength(dataString));
        requestEnterString();
        break;

      case "5":
        console.log(sortWordsByUnique(dataString));
        requestEnterString();
        break;

      case "6":
        console.log(sortByUnique(dataString));
        requestEnterString();
        break;

      default:
        selectOperation();
    }
  });
};

const requestEnterString = () => {
  rl.question("Enter string of words or numbers: ", (value) => {
    if (value === "exit") {
      rl.close();
      return;
    }
    dataString = value.split(" ");
    selectOperation();
  });
};

const sortString = () => {
  requestEnterString();
};

sortString();
