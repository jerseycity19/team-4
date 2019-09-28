const express = require('express');
const maraidb = require('mariadb');
const moment = require('moment');
const bodyParser = require('body-parser');

const db_login = require('./database_login.json');

var pool = maraidb.createPool({
  host: db_login.host,
  user: db_login.user,
  password: db_login.password,
  database: db_login.database,
  connectionLimit: 20
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

function checkCode(code) {
  return new Promise((res, rej) => {
    pool.getConnection()
        .then(
            conn => {

                conn.query(
                        `select start_time,end_time,number_people from accesscode where code = ${
                            code}`)
                    .then((rows) => {
                      console.log(rows[0].start_time);
                      if (rows[0].number_people == 0 ||
                          (rows[0].start_time >= Date.now() &&
                           rows[0].end_time <= Date.now())) {
                        res(false);
                      } else {
                        console.log(Date.now());
                        res(true);
                      }
                    })})
        .catch(
            err => {
                // not connected
            });
  })

  // First, check for number of tries remaining
  // SELECT numTriesRemaining FROM accessCodes WHERE accessCode = code
  // if (result = 0 || result ISNULL) {
  // Either prompt that access code is invalid or simply guide them
  // to the form without access code
  // }

  // At this point, we know that the access code exists
  // Now, check that access code has not been expired
  // SELECT expirationDate FROM accessCodes WHERE accessCode = code
  // if (currDate > result) {
  // Access code has expired. Decide whether to tell them
  // code is expired or to simply guide to form without access code
  // }

  // If it gets to this point, access code is valid and can be used
  // So, we need to update the database to record this use of the access code
  // UPDATE accessCodes SET numTriesRemaining -= 1 WHERE accessCode = code

  // Prompt them to fill out the survey.
}

// Generate a unique code
function createCode() {}

// pool.getConnection()
// .then(conn => {
//     // console.log('Connection:', conn);
//     conn.query(`INSERT INTO accesscode value(12, 12, 12, ${(new
//     Date()).getTime()}, ${(new Date()).getTime()}, 1)`) .then(completion => {
//         console.log('Success:', completion);
//     })
//     .catch(err => console.log(err));
// })
// .catch(err => console.log(err));

// pool.getConnection()
// .then(conn => {
//     // console.log('Connection:', conn);
//     conn.query(`INSERT INTO accesscode value(12, 12, 12,
//     ${(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'))},
//     ${moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')}, 1)`)
//     .then(completion => {
//         console.log('Success:', completion);
//     })
//     .catch(err => console.log(err));
// })
// .catch(err => console.log(err));


function createCode() {
  return String(Math.random());
}

function checkValidity(code) {}


app.get(
    '/api/newaccesscode',
    (req, res) => {

    })

app.post('/api/checkAccessCodeValidity', (req, response) => {
  checkCode(req.body.accessCode)
      .then(isValid => {
        console.log(isValid);
        response.json({isValid: isValid})
      })
      .catch(err => {
        console.log(err);
      });
});



app.post('/api/createevent', (req, res) => {
  console.log('Creating event..');
  var e = req.body;
  var eventAccessCode = createCode();

  console.log(e);

  pool.getConnection()
      .then(
          conn => {
              conn.query(
                      'INSERT INTO accesscode value (?, ?, ?, ?, ?, ?, ?, ?)',
                      [
                        null, eventAccessCode, e.userId, e.startDate, e.endDate,
                        e.numPeople, e.name, e.type
                      ])
                  .then(result => {
                    console.log('result:', result);
                    res.json({accessCode: eventAccessCode});
                  })
                  .catch(err => console.log(err))})
      .catch(err => console.log(err));
});

app.post(
    '/api/submitform',
    (req, res) => {

    })

app.use(express.static('FrontEnd'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))