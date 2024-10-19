const express = require('express');
const app = express();
const port = 3000;


const cors = require('cors');
app.use(cors());


const parentRoute = require('./routes/parents/parentRoute'); 
const studentRoute = require('./routes/students/studentRoute');
app.use(express.json());



app.use('/students', studentRoute);



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});