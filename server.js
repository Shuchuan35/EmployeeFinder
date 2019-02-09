const express = require('express');
const path = require('path');
const employees = require('./app/data/employees.js');

const app = express();
const PORT = 5000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get('/api/employees', function(req, res) {
    res.json(employees);
});

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});