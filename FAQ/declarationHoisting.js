// declarationHoisting.js

// what will input from the following code fragment?

function test() {
	console.log(a)
	console.log(foo())
	var a = 1
	function foo(){
		return 2
	}
}

test() // undefined 2

//A ==> the a and foo varible will hoisting in the test's scope

// terriable specility

// equal the next expression
function test() {
   var a;
   function foo() {
      return 2;
   }
 
   console.log(a);
   console.log(foo());
    
   a = 1;
}
 
test();