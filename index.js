const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(process.env.PORT || 3000, () => console.log('Server started at port : 3000'));


app.get('/', (req, res) => {
    res.send('CICD App V1!')
})

app.use('/status', (req, res) => {
    res.status(200).send('Ok')
})
app.use('/employees', employeeController);
