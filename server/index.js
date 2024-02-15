const express = require('express');


const app = express();
const PORT = '3000';

app.get('/', (req, res) => {
    res.send('Hello new paltz')
});

app.listen(PORT, () => {
    console.log("App listining at http://localhost:${PORT}")
})