const fs = require("fs");

const loadFiles = (pathFolder, quanityFiles) => {
  const allFiles = [];

  for (let i = 0; i < quanityFiles; i += 1) {
    const fileContent = fs
      .readFileSync(`${pathFolder}out${i}.txt`, "utf-8")
      .split("\n");

    const sortedFile = [...fileContent].sort();

    allFiles.push(sortedFile);
  }
  return allFiles;
};

// const dataFiles = loadFiles("./200k_words_100x100/", 20);
const dataFiles = loadFiles("./2kk_words_400x400/", 20);

const binarySearch = (arr, value, query = "index") => {
  let startIndex = 0;
  let stopIndex = arr.length - 1;

  while (startIndex <= stopIndex) {
    let middle = Math.floor((startIndex + stopIndex) / 2);
    let guess = arr[middle];

    if (guess === value) {
      return query === "string" ? arr[middle] : middle;
    }

    if (guess > value) {
      stopIndex = middle - 1;
    } else if (value > arr[middle]) {
      startIndex = middle + 1;
    }
  }

  return null;
};

const uniqueValues = (allFiles) => {
  const allData = allFiles.flatMap((el) => el);
  const sortData = allData.sort();

  const countUnique = sortData.reduce((acc, el, idx, arr) => {
    const uniqueEl = binarySearch(arr, el);

    uniqueEl === idx ? (acc += 1) : acc;
    return acc;
  }, 0);

  return countUnique;
};

const existInAllFiles = (dataFiles) => {
  return dataFiles.flatMap((el) => el).length;
};

const existInAtLeastTen = (dataFiles) => {
  const totalCount = dataFiles.reduce((prevArr, dataEl, i, dataArr) => {
    const totalArr = dataEl.reduce((acc, el, idx, arr) => {
      for (let i = 0; i < dataArr.length; i += 1) {
        const searchEL = binarySearch(dataArr[i], el);

        searchEL ? acc.push(searchEL) : acc;
      }

      return acc;
    }, []);
    prevArr.push(totalArr);

    return prevArr;
  }, []);

  const result = uniqueValues(totalCount);

  return result;
};

console.time("test");

console.log("uniqueValues: ", uniqueValues(dataFiles));
console.log("existInAllFiles: ", existInAllFiles(dataFiles));
console.log("existInAtLeastTen:", existInAtLeastTen(dataFiles));

console.timeEnd("test");
