const fs = require("fs");

const loadSortedDataById = (path) => {
  const loadedData = fs.readFileSync(path, "utf-8");

  return JSON.parse(loadedData);
};

const data = loadSortedDataById("./data.json");

const prepareData = (data) => {
  const newData = data.reduce((acc, el) => {
    if (!acc.hasOwnProperty(el.user._id)) {
      acc[el.user._id] = {
        userId: el.user._id,
        name: el.user.name,
        weekendDates: [{ startDate: el.startDate, endDate: el.endDate }],
      };
    } else {
      acc[el.user._id].weekendDates.push({
        startDate: el.startDate,
        endDate: el.endDate,
      });
    }

    return acc;
  }, {});
  return Object.values(newData);
};

const newData = prepareData(data);

fs.writeFileSync("./groupedData.json", JSON.stringify(newData, null, 2));
