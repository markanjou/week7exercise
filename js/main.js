var myH1 = document.getElementById("myH1");
	myH1.innerText = "Some text!";
var myNewH1 = document.getElementById("myNewH1");

function getInfo() {
	var userInput = document.getElementById("userInput").value;
	console.log(userInput);
		myNewH1.innerText = userInput;
}

var stringArray = ["this", "is", "a", "string", "array"];
	
for(var i = 0; i < stringArray.length; i++) {
	console.log(stringArray[i]);
}

var myMlk = {
	name: "Anthony",
	age: 34,
	isFemale: false
};

console.log(myMlk.name);
console.log(myMlk.age);
console.log(myMlk.isFemale);

var heading1 = document.getElementById("heading1");
var heading2 = document.getElementById("heading2");
var heading3 = document.getElementById("heading3");

	heading1.innerText = myMlk.name;
	heading2.innerText = myMlk.age;
	heading3.innerText = myMlk.isFemale;

var myArray = [
		{
			team: "Golden State Warriors",
			coach: "Steve Kerr",
			conference: "Western"
		},
		{
			team: "San Antonio Spurs",
			coach: "Greg Poppovich",
			conference: "Western"
		},
		{
			team: "Cleveland Cavaliers",
			coach: "Tyronn Lue",
			conference: "East"
		}
];

for(var i = 0; i < myArray.length; i++) {
	console.log(myArray[i].team);
	console.log(myArray[i].coach);
	console.log(myArray[i].conference);
}

document.body.style.color = "red";
