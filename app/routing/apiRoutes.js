const express = require('express');
const app = express();
const employees = require('../../app/data/employees.js');

app.get('/api/employees', function(req, res) {
    return res.json(employees);
});
