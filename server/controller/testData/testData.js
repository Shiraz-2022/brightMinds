const { testData: testDataCp } = require("../../data/testData");
const Reading = require("../../models/readingSchema");

const testDataPush = async (req, res) => {
  const testData = testDataCp;
  console.log(testData);

  try {
    // Insert all testData into the reading collection
    await Reading.insertMany(testData);
    res.status(201).send("Data added successfully");
  } catch (error) {
    res.status(500).send(`Error adding data: ${error.message}`);
  }
};

module.exports = { testDataPush };
