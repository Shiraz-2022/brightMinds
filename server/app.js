const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./config/db");

const cors = require("cors");
app.use(cors());

const parentRoute = require("./routes/parents/parentRoute");
const studentRoute = require("./routes/students/studentRoute");
const testDataRoute = require("./routes/testData");

const AdaptiveLearningSystem = require("./services/adaptiveLearning");

const adaptiveLearningSystem = new AdaptiveLearningSystem();
app.use(express.json());

connectDB();

app.use("/students", studentRoute);
app.use("/parents", parentRoute);

app.use("/adaptive-learning", adaptiveLearningSystem.app);
app.use("/testData", testDataRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
