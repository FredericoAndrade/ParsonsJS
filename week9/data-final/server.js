var express = require('express'),
    app = express()

// general metadata about Spain's eight native languages

var languages = [
    {
        name: 'aragonese',
        nativeName: 'fabla',
        status: 'recognized',
        distribution: 'aragon',
        populationL1: 10000,
        populationL2: 20000,
        id:8
    },
    {
        name: 'aranese',
        nativeName: 'aranès',
        status: 'regionally official',
        distribution: 'catalonia',
        populationL1: 5000,
        populationL2: 'None - insufficient data',
        id:9
    },
    {
        name: 'asturian',
        nativeName: 'asturianu',
        status: 'unrecognized',
        distribution: 'asturias',
        populationL1: 110000,
        populationL2: 450000,
        id:2
    },
    {
        name: 'basque',
        nativeName: 'euskera',
        status: 'regionally official',
        distribution: 'basque country',
        populationL1: 715000,
        populationL2: 'None - insufficient data',
        id:4

    },
    {
        name: 'catalan',
        nativeName: 'català',
        status: 'regionally official',
        distribution: 'catalonia, valencia, balearic islands',
        populationL1: 11500000,
        populationL2: 500000,
        id:9
    },
    {
        name: 'extremaduran',
        nativeName: 'estremeñu',
        status: 'unrecognized',
        distribution: 'extremaduran',
        populationL1: 200000,
        populationL2: 'None - insufficient data',
        id:11
    },
    {
        name: 'galician',
        nativeName: 'galego',
        status: 'regionally official',
        distribution: 'galicia',
        populationL1: 3200000,
        populationL2: 'None - insufficient data',
        id:1
    },
    {
        name: 'spanish',
        nativeName: 'español',
        status: 'nationally official',
        distribution: 'nationwide',
        populationL1: 407000000,
        populationL2: 6000000032,
        id:0
    }
]

// localhost:8888 introduces api

app.get('/', function (req, res) {
    res.send(
        '<div style="position:fixed; top:0; left:0; width:100%; height:100%; background:#f1f1f1; text-align:center; font-family:georgia; color:#333; text-shadow:0px 1px 0px #fff">' +
        '<h2 style="margin:25px 0px;">Languages of Spain</h2>' +
        '<p style="margin:0px; font-size:14pt;">' +
        'For data on Spain\'s eight native languages, <a style="color:#333;" href="http://localhost:8888/data">click here</a>,' +
        '<br />or enter \'<span style="font-family:helvetica">http://localhost:8888/data</span>\' in your browser window.' +
        '</div>'
        )
})

// localhost:8888/data returns stringified data

app.get('/data', function (req, res) {
    var callback = req.query.callback
    res.end(callback + '(' + JSON.stringify(languages) + ')')
    //res.end(JSON.stringify(languages))
})

app.get('/languages', function(req,res){

    res.send(
        '('+JSON.stringify(data,'quantity',null,4)+')'
        )
})

// run node server.js in terminal

app.listen(8888)

// terminal will return this message if the server is running. go to localhost:8888 for a look at the data

console.log('Check out the languages of Spain!')





//