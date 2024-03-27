const express = require('express');

const app = express();

app.get('/add', (req, res) => {
   
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);


    const sum = num1 + num2;

    res.json({ result: sum });
});


app.get('/', (req, res) => {
    res.send('Add Two Numbers');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running ${PORT}');
});