const express = require('express');

const app = express();

app.listen(9000, function(req,res) { //req is data requested from client to server
                                     //res is data requested from server to client
    // Fetch data from server
    // The first parameter is the url
    app.get('/', function(req, res) {
        res.send("Hello World")
    })

    app.get('/alien', function(req, res) {
        //Using query string for url
        const idq = req.query.idq


        res.send("Welcome back Alien" + idq)
    })

    //Accepting Dynamic URL
    app.get('/alien/:id', function(req, res) {
        //Using id string for url
        const id = req.params.id
        res.send("Good day sir" + id)
    })
        //Check if server is running
    console.log("Server running...")
});