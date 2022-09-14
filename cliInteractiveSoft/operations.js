const sortWordsByAlphabet = (data) => {
  const filteredData = data.filter((el) => isNaN(el));

  return [...filteredData].sort((a, b) => a.localeCompare(b));
};

const sortNumbersByIncrease = (data) => {
  const filteredData = data.filter((el) => !isNaN(el));
  return [...filteredData].sort((a, b) => a - b);
};

const sortNumbersByDecrease = (data) => {
  const filteredData = data.filter((el) => !isNaN(el));

  return [...filteredData].sort((a, b) => b - a);
};

const sortWordsByLength = (data) => {
  const filteredData = data.filter((el) => isNaN(el));

  return [...filteredData].sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });
};

const sortWordsByUnique = (data) => {
  return data
    .filter((el) => isNaN(el))
    .filter((el, idx, arr) => arr.indexOf(el) === idx);
};

const sortByUnique = (data) => {
  return data.filter((el, idx, arr) => arr.indexOf(el) === idx);
};

module.exports = {
  sortWordsByAlphabet,
  sortNumbersByIncrease,
  sortNumbersByDecrease,
  sortWordsByLength,
  sortWordsByUnique,
  sortByUnique,
};
