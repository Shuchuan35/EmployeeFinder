const employeeList = require('../data/employees.js');

module.exports = function (app) {
    
    app.get('/api/employees', function(req, res) {
        res.json(employeeList);
    });
}
