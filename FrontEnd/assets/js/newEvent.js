
function onCreateNewEvent() {
    var eventData = {
        name: document.getElementById('eventNameInput').value,
        startDate: document.getElementById('eventStartDate').value,
        endDate: document.getElementById('eventEndDate').value,
        type: document.getElementById('eventType').value
    }

    console.log(eventData);
    axios.post('/api/createevent', { name: 'hey' })
        .then(({ data }) => {
            console.log(data);
        })
}