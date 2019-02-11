// const getUserInput = function(e) {
//     e.preventDefault();
//     const q1 = $('#q1').val();
//     const q10 = $('#q10').val();
//     console.log(q1,q10);
// }

// $('#submit').on('click', getUserInput);
const employees = require('../../../app/data/employees.js');
const scoresList = [];

const user0 = [4,2,6,3,4,1,2,5,4,1];
const user1 = [5,1,4,4,5,1,2,5,4,1];
const user2 = [3,2,6,4,5,1,2,5,4,1];
const users = [];
users.push(user1);
users.push(user2);

for (let i = 0; i < employees.length; i++) {
    let totalDifference = 0;
    for (let j = 0; j < 10; j++) {
        totalDifference = totalDifference + Math.abs(user0[j] - employees[i].scores[j]);
    }
    scoresList.push({
        name: employees[i].name,
        totalDifference: totalDifference
    });
}

let totalDifference1 = 0;
for (let j = 0; j < 10; j++) {
    totalDifference1 = totalDifference1 + Math.abs(user0[j] - user1[j]);
}

let totalDifference2 = 0;
for (let j = 0; j < 10; j++) {
    totalDifference2 = totalDifference2 + Math.abs(user0[j] - user2[j]);
}

module.exports = {
    // scoresList: scoresList,
    totalDifference1: totalDifference1,
    totalDifference2: totalDifference2
}