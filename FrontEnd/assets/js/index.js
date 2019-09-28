$(document).ready(() => {
  console.log('SETUP2');

  $('#accessCodeForm').submit((event) => {
    event.preventDefault();

    var accessCode = document.getElementById('access-code-input').value;
    console.log('Access:', accessCode);

    axios.post('/api/checkAccessCodeValidity', {'accessCode': accessCode})
        .then(response => {
          if (response.data.isValid) {
            console.log('IT\'S VALID');
          } else {
            console.log('NOT VALID');
          }
          window.location.pathname = '/form2.html';
        })
  })
})
