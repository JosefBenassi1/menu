const express = require('express');
const app     = express();

app.use(express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
    res.sendfile('index.html', {root: __dirname});
});
const server = app.listen(process.env.PORT || 80);