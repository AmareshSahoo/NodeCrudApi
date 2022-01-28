const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(process.env.PORT || 3000, () => console.log('Server started at port : 3000'));

app.use('/test', (req, res) => {
    res.send('Hello World!')
})
app.use('/employees', employeeController);
