
$(document).ready(() => {
    console.log('Ready.');
    var accessCode;
    var isAccessCodeValid;

    if (window.localStorage.getItem('accessCode') && window.localStorage.getItem('isValid')) {
        accessCode = window.localStorage.getItem('accessCode');
        isAccessCodeValid = window.localStorage.getItem('isValid');
        console.log("ACCESS:", accessCode, isAccessCodeValid);
    }

    $('#survey-btn').click(() => {
        console.log('HEY');
        var identification = document.getElementById('identification').value;
        console.log('hello');
      });
})

document.addEventListener('DOMContentLoaded', () => {
    var accessCode;
    var isAccessCodeValid;

    if (window.localStorage.getItem('accessCode') && window.localStorage.getItem('isValid')) {
        accessCode = window.localStorage.getItem('accessCode');
        isAccessCodeValid = window.localStorage.getItem('isValid');
        console.log("ACCESS:", accessCode, isAccessCodeValid);
    }

    $('#survey-btn').click(() => {
        var surveyData = {
            identification: document.getElementById('identification').value,
            ageRange: document.getElementById('ageRange').value,
            gender: document.getElementById('gender').value,
            country: document.getElementById('country').value,
            language: document.getElementById('language').value,
            employmentStatus: document.getElementById('employmentStatus').value,
            discipline: document.getElementById('discipline').value,
            sensitivity: document.getElementById('sensitivity').value,
            q1: document.getElementById('q1').value,
            q2: document.getElementById('q2').value,
            q3: document.getElementById('q3').value,
            q4: document.getElementById('q4').value,
            q5: document.getElementById('q5').value,
            q6: document.getElementById('q6').value,
            q7: document.getElementById('q7').value,
            accessCode: accessCode,
            valid: isAccessCodeValid || false,
        };

        console.log(surveyData);
        axios.post('/api/submitform', surveyData)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log("ERROR:", err);
            })
      });
});