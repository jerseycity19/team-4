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

function checkCode(code) {
    pool.getConnection()
        // First, check for number of tries remaining
        // SELECT numTriesRemaining FROM accessCodes WHERE accessCode = code
        if (result = 0 || result ISNULL) {
            // Either prompt that access code is invalid or simply guide them
            // to the form without access code
        }

        // At this point, we know that the access code exists
        // Now, check that access code has not been expired
        // SELECT expirationDate FROM accessCodes WHERE accessCode = code
        if (currDate > result) {
            // Access code has expired. Decide whether to tell them
            // code is expired or to simply guide to form without access code
        }

        // If it gets to this point, access code is valid and can be used
        // So, we need to update the database to record this use of the access code
        // UPDATE accessCodes SET numTriesRemaining -= 1 WHERE accessCode = code

        // Prompt them to fill out the survey. 
}

// Generate a unique code 
function createCode()

// pool.getConnection()
// .then(conn => console.log("Connection:", conn))
// .catch(err => console.log("err:", err))

pool.getConnection()
.then(conn => {
    // console.log('Connection:', conn);
    conn.query(`INSERT INTO accesscode value(12, 12, 12, ${(new Date()).getTime()}, ${(new Date()).getTime()}, 1)`)
    .then(completion => {
        console.log('Success:', completion);
    })
    .catch(err => console.log(err));
})
.catch(err => console.log(err));

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