function getCode(code) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "https://www.scholarsatrisk.org/secure-submission/",
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    qrcode.makeCode(code);
}

function onCreateNewEvent() {
    console.log(typeof(document.getElementById('eventStartDate').value));

    var eventData = {
        name: document.getElementById('eventNameInput').value,
        startDate: document.getElementById('eventStartDate').value,
        endDate: document.getElementById('eventEndDate').value,
        type: document.getElementById('eventType').value,
        numPeople: document.getElementById('numPeople').value,
        userId: String(Math.random())
    }

    console.log('Submitting event data:', eventData);
    axios.post('/api/createevent', eventData)
        .then(({ data }) => {
            console.log(data);
            document.getElementById('accessCode').innerText = data.accessCode;
            getCode(data.accessCode);
        })
}