const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
}).listen(3000, () => {
    console.log('Example app listening on port 3000!');
    console.log('http://localhost:3000');
})