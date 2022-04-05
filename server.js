const express = require('express');

const app = express();

app.get('/', (req, res) =>
    res.send('HOla con express'))

app.listen(3000);
console.log("Servidor conectado desde 3000")