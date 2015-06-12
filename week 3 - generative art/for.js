var arr =[5,6,7,8,9]

//define it outside of the loop for global scope.
var item, 	//you can declare lots of variables at once with commas	
	sum = 0 //=0 gives it a value. no value makes it undefined


for (var i=0; i < arr.length; i++){
	item = arr[i]
	sum = sum + item //sum += item
}