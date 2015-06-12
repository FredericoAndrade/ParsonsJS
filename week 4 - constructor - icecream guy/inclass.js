function sum (a, b, callback) {
	var result = a + b
	if (callback){
		callback() //function overload
	}
}

sum (1, 2)


// ===  deep equal compares types (string, number, float)
////
var dog = {
	name: "Pepper",
	owner: "Jeff",
	bark: function (){
		console.log('Woof!')
	}
}

dog.bark()// woof
////understanding .this
var dude = {
	firstName: 'John',
	lastName: 'Doe',
	getFullName: function (){
		console.log(this.firstName + '' + this.lastName) // .this speaks to the inside of 

	}

}

dude.getFullName() // John Doe 
//// using Constructors - (also a function, distinguished by Title Case)

function Dude (name, age){
	this.name = name
	this.age = age
}

var dude1 = new Dude ('John', 21) // never ever call a constructor without the new method
dude1.name //john
dude1.age //21

var dude2 = new Dude ('Mike', 25)
dude1.name//Mike
dude2.age//25

////.prototype chain

function son () {


}

son.prototype = {

	__proto__: dad.prototype  //magic property

}

function dad () {

}

dad.prototype = {

}

////
