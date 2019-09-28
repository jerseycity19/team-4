$(document).ready(() => {

    getDemographicData();
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

    function getDemographicData() {
        // return new Promise((res, rej) => {
        axios.get('/api/demographicsdata')
        .then(({ data }) => {

            var data = data.data;
            console.log(data.map(x => x.gender));
            
            var data = {
                labels: data.map(x => x.gender),
                datasets: [{
                    data: data.map(x => x['count(user_id)']),
                    colors: []
                }]
            }

            var ctx = document.getElementById('demogr').getContext('2d');
            console.log('Context:', ctx);
            var donutChart = new Chart(ctx, {
                type: 'doughnut',
                data: data,
            });
            console.log(donutChart);

        })
    }
});