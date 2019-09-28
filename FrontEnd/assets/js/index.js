import axios from 'axios';

function onAccessCodeFormSubmit() {
    var accessCode = document.getElementById('access-code-input').value;
    console.log('Access:', accessCode);

    axios.post('/api/checkValidity', { "accessCode": accessCode })
        .then(response => {
            if (response.isValid) {
                console.log("IT'S VALID");
            } else {
                console.log("NOT VALID");
            }
        })
}

