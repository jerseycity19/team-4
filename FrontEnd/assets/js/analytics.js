$(document).ready(() => {

    getLatestData();

    function getUnvalidatedData() {
        return new Promise((resolve, reject) => {
            axios.get('/api/getunvalidated')
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => console.log(err));
        })
    };

    function getLatestData() {
        var dataTable = document.getElementById('latest-table-body');
        return new Promise((resolve, reject) => {
            axios.get('/api/latestresponses')
            .then(({ data }) => {
                var innerHtmlString = '';
                data.data.forEach(row => {
                    innerHtmlString += `<tr><td>${row.identification}</td><td>${row.country}</td><td>${row.disciple_area}</td><td>${row.sensitivity}</td><td>${row.code_flag}</td></tr>`
                })
                dataTable.innerHTML = innerHtmlString;
            })
            .catch(err => console.log(err));
        })
    }
});