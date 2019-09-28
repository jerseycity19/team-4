$(document).ready(() => {

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
        return new Promise((resolve, reject) => {
            axios.get('/api/getlatest')
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => console.log(err));
        })
    }
});