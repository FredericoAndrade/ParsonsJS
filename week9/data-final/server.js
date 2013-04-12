var express = require('express'),
    app = express()

// general metadata about Spain's eight native languages

var languages = require('./languages.json')

// localhost:8888 introduces api

app.get('/', function (req, res) {
    res.send(
        '<div style="position:fixed; top:0; left:0; width:100%; height:100%; background:#f1f1f1; text-align:center; font-family:georgia; color:#333; text-shadow:0px 1px 0px #fff">' +
        '<h2 style="margin:25px 0px;">Languages of Spain</h2>' +
        '<p style="margin:0px; font-size:14pt;">' +
        'For data on Spain\'s eight native languages, <a style="color:#333;" href="http://localhost:8080/data">click here</a>.' +
        '<br />' +
        '</div>'
        )
})

// localhost:8888/data returns stringified data



app.get('/languages', function (req, res){
    var callback = req.query.callback
    res.end(callback + '(' + JSON.stringify(languages) + ')')
})

// run node server.js in terminal

app.listen(8080)

// terminal will return this message if the server is running. go to localhost:8888 for a look at the data

console.log('Check out the languages of Spain!')





//