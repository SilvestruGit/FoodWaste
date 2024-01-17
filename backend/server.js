const express = require('express');
const bodyParser = require('body-parser');
const mongoServ = require('./mongo');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH');
    next();
})

app.post('/produs', mongoServ.createProdus);

app.get('/', mongoServ.getProduse);

app.listen(5000, () => console.log('Server running on port 5000'));