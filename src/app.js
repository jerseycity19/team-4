const express = require('express');

const app = express();
const port = 3000;

app.get('/api/newaccesscode', (req, res) => {

})

app.post('/api/submitform', (req, res) => {
    
})

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))