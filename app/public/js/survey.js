$(function () {
    const render = function (user) {
        console.log(user);
        $('#match-name').text(user.name);
        $('#match-img').attr('src', user.photo);
        $('#results-modal').removeAttr('aria-hidden');
        $('#results-modal').attr('style', 'display: block');

    }

    const calculateLeastDifference = function (employees, newUserData) {
        const scoresList = [];
        const scores = [];
        let userName = '';
        for (let i = 0; i < employees.length; i++) {
            let totalDifference = 0;
            for (let j = 0; j < 10; j++) {
                totalDifference = totalDifference + Math.abs(newUserData[j] - employees[i].scores[j]);
            }
            console.log(`totalDifference for ${employees[i].name} is:  ${totalDifference}`);
            scoresList.push({
                name: employees[i].name,
                totalDifference: totalDifference
            });
            scores.push(totalDifference);
        }
        const least = Math.min.apply(null, scores);
        for (i in scoresList) {
            if (scoresList[i].totalDifference == least) {
                userName = scoresList[i].name;
            }
        }
     
        for (i in employees) {
            if (employees[i].name == userName) {
                render(employees[i]);
            }
        }
    }

    const getApi = function (newUserData) {
        $.ajax({
            method: 'GET',
            url: 'api/employees'
        }).then(function (res) {
            calculateLeastDifference(res.employees, newUserData);
        });
    }

    const findMatchEmployee = function (e) {
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

        const newUserData = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
        if (q1 == null || q2 == null || q3 == null || q4 == null
            || q5 == null || q6 == null || q7 == null || q8 == null || q9 == null || q10 == null) {
            $('#error').addClass('alert alert-danger');
            $('#error').text('Please fill out all fields before submitting!');
        } else {
            getApi(newUserData);
        }
    }
    // $('#q1').val('');
    // $('#q2').val('');
    // $('#q3').val('');
    // $('#q4').val('');
    // $('#q5').val('');
    // $('#q6').val('');
    // $('#q7').val('');
    // $('#q8').val('');
    // $('#q9').val('');
    // $('#q10').val('');

    $('#submit').on('click', findMatchEmployee);
});