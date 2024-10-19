const express = require('express');
const app = express();
const port = 3000;


const cors = require('cors');
app.use(cors());


const parentRoute = require('./routes/parents/parentRoute'); 
const studentRoute = require('./routes/students/studentRoute');

const AdaptiveLearningSystem = require('./services/adaptiveLearning');

const adaptiveLearningSystem = new AdaptiveLearningSystem();
app.use(express.json());




app.use('/students', studentRoute);



app.use('/adaptive-learning', adaptiveLearningSystem.app);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});