const express = require('express');
const maraidb = require('mariadb');
const moment = require('moment');

const db_login = require('./database_login.json');

var pool = maraidb.createPool({
    host: db_login.host, 
    user: db_login.user, 
    password: db_login.password,
    database: db_login.database,
    connectionLimit: 20
});

const app = express();
const port = 3000;

// pool.getConnection()
// .then(conn => {
//     // console.log('Connection:', conn);
//     conn.query(`INSERT INTO accesscode value(12, 12, 12, ${(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'))}, ${moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')}, 1)`)
//     .then(completion => {
//         console.log('Success:', completion);
//     })
//     .catch(err => console.log(err));
// })
// .catch(err => console.log(err));

function createCode() {
    
}

function checkValidity(code) {

}

app.get('/api/newaccesscode', (req, res) => {

})

app.post('/api/checkAccessCodeValidity', (req, res) => {
    var isValid = checkValidity(req.params.accessCode);
    res.json({
        success: true,
        isValid: isValid
    })
});

app.post('/api/submitform', (req, res) => {
    
})

app.use(express.static('FrontEnd'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))