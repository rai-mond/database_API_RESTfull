const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var serveStatic = require('serve-static'); 

const app = express();
const port = 3000;
let datas = [];

app.use(serveStatic('static', {'index': ['index.html']}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/database', (req, res) => {
    const data_entry = req.body;

    datas.push(data_entry);
    console.log('test data_entry     ',data_entry);
    
    res.send('Book is added to the database');
});

app.get('/database', (req, res) => {
    res.json(datas);
});





app.listen(port, () => console.log(`database ready on port ${port}!`))

