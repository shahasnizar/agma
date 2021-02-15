const express = require('express');
const app = express();
const port = 8080;

// Setting up the public directory
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/test', (req, res) => {
    // res.sendFile('index.html', { root: __dirname });
    console.log("Yayyy HITTT")
    res.json({ "foo": "bar" });
});

app.listen(port, () => console.log(`listening on port ${port}!`));