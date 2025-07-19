const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/gethello', (req, res) => {
    res.send('Hello NodeJS!!');
});

app.get('/page1',(req,res)=>
{
    res.send("Hello World!!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});