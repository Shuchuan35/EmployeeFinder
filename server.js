const express = require('express');
const path = require('path');
const employees = require('./app/data/employees.js');
// const survery = require('./app/public/js/survey.js');

const app = express();
const PORT = 5000;

const user0 = [4,2,6,3,4,1,2,5,4,1];
const scoresList = [];
for (let i = 0; i < employees.employees.length; i++) {
    let totalDifference = 0;
    for (let j = 0; j < 10; j++) {
        totalDifference = totalDifference + Math.abs(user0[j] - employees.employees[i].scores[j]);
    }
    scoresList.push({
        name: employees.employees[i].name,
        totalDifference: totalDifference
    });
    // employees.employees[i].extend({totalDifference: totalDifference});
    // console.log(employees.employees[i]);
}
console.log(scoresList);
// htmlRoutes.js
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

// apiRoutes.js
app.get('/api/employees', function(req, res) {
    res.json(employees);
});

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}...`);
});