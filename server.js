'use strict'

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/webhook", (req, res) => {
    res.send("Bienvenido a mi webhook");
    console.log("get");
})


app.listen(port, () => {
    console.log('Servicio corriendo en el puerto ' + port);
})

app.post("/webhook", (req, res) => {
    var data = req.body;
    console.log("Inicio del Json recibido");
    console.log(data)
    console.log("Fin del Json recibido");
    res.sendStatus(200)
})