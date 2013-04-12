var express = require('express'),
    app = express()

// general metadata about Spain's eight native languages

var languages = require('./languages.json')

// localhost:8080 introduces api

app.get('/', function (req, res) {
    var returnString = 'Hi there, for raw data on spain, please use /languages.'
    res.send(returnString)
})

// localhost:8080/languages returns stringified data

app.get('/languages', function (req, res){

    var name = req.query.name,
        nativeName = req.query.nativeName,
        status = req.query.status,
        population = req.query.populationL1,
        callback = req.query.callback

    var returnArray = []

    languages.forEach(function(data){

            var qualified = true

            if (name && data.name !== name) {
                qualified = false
            }

            if (nativeName && data.nativeName !== nativeName) {
                qualified = false
            }

            if (status && data.status !== status) {
                qualified = false
            }

            if (qualified) {
                returnArray.push(data)
            }

        })


    if (callback){
        res.send(callback + '(' + JSON.stringify(returnArray) + ')')
    } else {
        res.send(returnArray)
    }

    //res.send(callback + '(' + JSON.stringify(languages) + ')')
})

// run node server.js in terminal

app.listen(8080)

// terminal will return this message if the server is running. go to localhost:8080 for a look at the data

console.log('Check out the languages of Spain!')
