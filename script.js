var x = "Hallo Haitham";
var message = ("global: message = " + message);

var a = function () {
  var message = "inside a";
  console. log("a: message = " + message);
//  b();	
}

function b () {
    console.log("b: message = " + message);	
}

a();

function a()
{
	return
   {
   	name: "Haitham"
   };
}

function b() {
	return  {
		name: "Haitham"
	};
}

console.log(a());
console.log(b());



// For loop
var sum = 0;
for (var i = 0; i < 10; i++)  {
	sum = sum + i;
}
console.log ("sum of 0 through 9 is: " + sum);



}