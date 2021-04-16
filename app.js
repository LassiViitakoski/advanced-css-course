const express = require('express');
const app = express();
const path = require('path');
const html = path.join(__dirname, 'public', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

app.get('/exercise-one', (req, res) => {
    res.sendFile(path.join(html, 'exercise1', 'index.html'));
})

const server = app.listen(80, () => {
    const port = server.address().port;
    const address = server.address().address;
    console.log("App listening port : " + port + " and address : " + address);
})