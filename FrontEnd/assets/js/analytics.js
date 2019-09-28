$(document).ready(() => {

    getDemographicData();
    getLatestData();
    getUnvalidatedData();

    function getUnvalidatedData() {
        return new Promise((resolve, reject) => {
            axios.get('/api/getunvalidated')
            .then(({ data }) => {
                var data = data.data;
                console.log('Data:', data);
                var ctx = document.getElementById("unvalidatedGraph");
                var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(x => x.country),
                    datasets: [{
                        data: data.map(x => x['count(user_id)']),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: false,
                        scales: {
                        xAxes: [{
                            ticks: {
                            maxRotation: 90,
                            minRotation: 80
                            }
                        }],
                        yAxes: [{
                            ticks: {
                            beginAtZero: true
                            }
                        }]
                        }
                    }
                });
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
                    backgroundColor: ['rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)']
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

