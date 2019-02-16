$(function () {
    const render = function (user) {
        $('#match-name').text(user.name);
        $('#match-img').attr('src', user.photo);
        $('#results-modal').removeAttr('aria-hidden');
        $('#results-modal').attr('style', 'display: block');
        // clear user input when submitting
        $('#name').val('');
        $('#photo').val('');
        $('#q1').val('');
        $('#q2').val('');
        $('#q3').val('');
        $('#q4').val('');
        $('#q5').val('');
        $('#q6').val('');
        $('#q7').val('');
        $('#q8').val('');
        $('#q9').val('');
        $('#q10').val('');
    }

    const calculateLeastDifference = function (employees, newUserScores) {
        const scoresList = [];
        const scores = [];
        let userName = '';
        for (let i = 0; i < employees.length; i++) {
            let totalDifference = 0;
            for (let j = 0; j < 10; j++) {
                totalDifference = totalDifference + Math.abs(newUserScores[j] - employees[i].scores[j]);
            }
            // console.log(`total difference for ${employees[i].name} is ${totalDifference}`);
            scoresList.push({
                name: employees[i].name,
                totalDifference: totalDifference
            });
            scores.push(totalDifference);
        }
        const least = Math.min.apply(null, scores);
        for (let i in scoresList) {
            if (scoresList[i].totalDifference == least) {
                userName = scoresList[i].name;
            }
        }
        for (let i in employees) {
            if (employees[i].name == userName) {
                render(employees[i]);
            }
        }
    }

    const getApi = function (newUserScores) {
        $.ajax({
            method: 'GET',
            url: 'api/employees'
        }).then(function (res) {
            calculateLeastDifference(res.employees, newUserScores);
        });
    }

    const addNewEmployee = function (newUserData) {
        // console.log(newUserData);
        $.ajax({
            method: 'POST',
            url: 'api/employees',
            data: newUserData
        })
    }

    const validateUserInput = function (e) {
        e.preventDefault();
        const q1 = $('#q1').val();
        const q2 = $('#q2').val();
        const q3 = $('#q3').val();
        const q4 = $('#q4').val();
        const q5 = $('#q5').val();
        const q6 = $('#q6').val();
        const q7 = $('#q7').val();
        const q8 = $('#q8').val();
        const q9 = $('#q9').val();
        const q10 = $('#q10').val();
        const name = $('#name').val();
        const photo = $('#photo').val();
        const newUserScores = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

        if (name == '' || photo == '' || q1 == null || q2 == null || q3 == null || q4 == null
            || q5 == null || q6 == null || q7 == null || q8 == null || q9 == null || q10 == null) {
            $('#error').addClass('alert alert-danger');
            $('#error').text('Please fill out all fields before submitting!');
            $('#submit').attr('data-target', '');
        } else {
            $('#submit').attr('data-target', '#results-modal');
            $('#error').removeClass('alert alert-danger');
            $('#error').text('');

            const newUserData = {
                name: name,
                photo: photo,
                scores: newUserScores
            };
            getApi(newUserScores);
            addNewEmployee(newUserData);
        }
    }
    $('#submit').on('click', validateUserInput);
});