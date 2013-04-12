var express = require('express'),
	app = express()

var data = [

//data structure

//ac.tv/cause
		//name
		//id

//ac.tv/cause/south-sudan/action/petition
									//type
									//id
									//taret value
									//current value
									//organization
									//description

//ac.tv/cause/south-sudan/aid/goal/
									//type
									//id
									//taret value
									//current value
									//quantity
									//organization
									//description

//ac.tv/cause/south-sudan/newsfeed/source/

	{
		dataType:'petition',
		id:0101,
		targetValue:2000000,
		currentValue:1626651,
		organization:'Avaaz',
		description:"As citizens from around the world, we call on you to oppose any attempt to evict Maasai from their traditional land or require them to relocate to make way for foreign hunters. We are counting on you to be a champion for your people and stop any attempt to change their land rights against their will."
	},

	{
		dataType:'petition',
		id:0102,
		targetValue:2500000,
		currentValue:2022069,
		organization:'Avaaz',
		description:"As concerned global citizens, we call on you to do more to protect vulnerable women and children. We welcome your government’s initial intervention in the case of the 15-year-old rape victim, but real justice will only be delivered when you end the practice of flogging in the Maldives, and change the law so that it better protects the victims of rape and sexual abuse."
	},

	{
		dataType:'petition',
		id:0103,
		targetValue:1000000,
		currentValue:874545,
		organization:'Avaaz',
		description:"As concerned citizens, we call on you to adopt a zero tolerance policy for human rights abuses committed by Somalia's security forces, and to ensure women are protected. The UN reports hundreds of cases of rape each month, many committed by government forces whose salaries are being paid for with foreign aid. Somalia's peaceful future depends on securing women's rights -- we urge you to take immediate steps to do so."
	},

	{
		dataType:'petition',
		id:0104,
		targetValue:1250000,
		currentValue:1083003,
		organization:'Avaaz',
		description:"We stand with citizens across Uganda who are calling on their government to withdraw once and for all the Anti-Homosexual Bill, and to protect the universal human rights embodied in the Ugandan constitution. We urge Uganda’s leaders and key partner countries to join us in rejecting persecution and upholding values of justice and tolerance."
	},

	{
		dataType:'goal',
		id:0201,
		targetValue:20,
		currentValue:0,
		quantity:15,
		organization:'UNHCR',
		description:"Provide 2 families with jerry cans to transport clean water."
	},

	{
		dataType:'goal',
		id:0202,
		targetValue:60,
		currentValue:5,
		quantity:8,
		organization:'UNHCR',
		description:"Provide 4 kitchen sets so families can cook for themselves."
	},

	{
		dataType:'goal',
		id:0203,
		targetValue:100,
		currentValue:43,
		quantity:7,
		organization:'UNHCR',
		description:"Provide 20 mosquito nets protecting children from the threat of malaria."
	},

	{
		dataType:'goal',
		id:0204,
		targetValue:500,
		currentValue:437,
		quantity:3,
		organization:'UNHCR',
		description:"Provide a tent to shelter a family from the elements."
	}

]

app.get('/', function (req, res) { //require + respond
	var returnString = "swag"
	res.send(returnString)
})

app.get('/api', function (req, res){

	res.end(JSON.stringify(data))

})

app.get('/cause', function (req,res){

	// var dataType = req.query.dataType,
 //        callback = req.query.callback

 //    // a temporary array to hold our qualified list
 //    var returnArray = []

 //    // loop through the entire dataset
 //    data.forEach(function ( cause ) {

 //        // assume this person is qualified to begin with.
 //        var qualified = true

 //        // check type of data
 //        if (dataType && cause.dataType !== dataType) {
 //            qualified = false
 //        }

 //        // if still qualified after the checks, we can add this cause
 //        // to the qualified list.
 //        if (qualified) {
 //            returnArray.push(person)
 //        }

 //    })

 //    if (callback) {
 //        // JSONP!
 //        res.send(callback + '(' + JSON.stringify(returnArray) + ')')
 //    } else {
 //        // just a normal request.
 //        // this WILL be restricted by the same-origin policy.
 //        res.send(returnArray)
 //    }

	res.send(
		'<div> <h1> Cause </h1> </div> (' + JSON.stringify(data,'quantity',null, 4) +')'
		)

})


app.listen(8080)
console.log('Success on port 8080!')
