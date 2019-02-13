const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/public')));

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// const user0 = [4,2,6,3,4,1,2,5,4,1];
// const scoresList = [];
// for (let i = 0; i < employees.employees.length; i++) {
//     let totalDifference = 0;
//     for (let j = 0; j < 10; j++) {
//         totalDifference = totalDifference + Math.abs(user0[j] - employees.employees[i].scores[j]);
//     }
//     scoresList.push({
//         name: employees.employees[i].name,
//         totalDifference: totalDifference
//     });
//     employees.employees[i].extend({totalDifference: totalDifference});
//     console.log(employees.employees[i]);
// }

// console.log(scoresList);


app.listen(PORT, function() {
    console.log(`Listening on http://localhost:${PORT}...`);
});