const express = require('express');
const app = express();
const port = 3000;


const audioRoute = require('./routes/audio');
const parentRoute = require('./routes/parents/parentRoute'); 

app.use(express.json());


app.use('/audioroute', audioRoute);
app.use('/parents', parentRoute); 

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});