const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var serveStatic = require('serve-static'); 

const app = express();
const port = 3000;
let books = [];

app.use(serveStatic('static', {'index': ['index.html']}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/data', (req, res) => {
    const book = req.body;

    books.push(book);
    console.log('test book     ',book);
    
    res.send('Book is added to the database');
});

app.get('/books', (req, res) => {
    res.json(books);
});





app.listen(port, () => console.log(`database ready on port ${port}!`))

