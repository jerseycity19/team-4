
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
    } else {
        console.log("No Access code found");
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
            selfCensoredFrequency: document.getElementById('self-censored-frequency').value,
            othersCensoredFrequency: document.getElementById('others-censored-frequency').value,
            advisedFrequency: document.getElementById('advised-frequency').value,
            primarySourceConsequences: document.getElementById('primary-source-consequences').value,
            experienceRelatiation: document.getElementById('experience-retaliation').value,
            awareOthersRetaliation: document.getElementById('aware-others-retaliation').value,
            chanceOfSelfSensor: document.getElementById('chance-of-self-censor').value,
            accessCode: accessCode,
            valid: isAccessCodeValid || false,
        };

        console.log(surveyData);
        axios.post('/api/submitform', surveyData)
            .then(response => {
                console.log(response);
                window.localStorage.setItem('accessCode', '');
                window.localStorage.setItem('isValid', '');
                window.location.pathname = '/thankyou.html'
            })
            .catch(err => {
                console.log("ERROR:", err);
                alert('Could not submit answers. Please try again.');
            })
      });
});