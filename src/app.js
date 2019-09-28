const express = require('express');
const maraidb = require('mariadb');
const db_login = require('./database_login.json');

var pool = maraidb.createPool({
    host: db_login.host, 
    user: db_login.user, 
    password: db_login.password,
    database: db_login.database,
    connectionLimit: 10
});

const app = express();
const port = 3000;

pool.getConnection()
.then(conn => console.log("Connection:", conn))
.catch(err => console.log("err:", err))

function createCode() {
    
}

function checkValidity(code) {

}

app.get('/api/newaccesscode', (req, res) => {

})

app.post('/api/submitform', (req, res) => {

})

app.use(express.static('FrontEnd'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))