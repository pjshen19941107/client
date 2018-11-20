// This is note //








/*
var str = "String.";
var num = 6;
var nums = [1,2,3,4,5,6];

var thisAfunction = function(x) {
 console.log(x);
};

var obj = {
    name: "TY Chen",
    affilication: "NTHU",
    gender: "Male"
};

thisAfunction(
	{
	 field1: "Test",
     field2: "Hello",
     field3: "Yeah!",
    }
);

*/







/*
document.addEventListener("DOMContentLoaded", function() {
	var eyesObj = document.getElementById("eyesPic");
	eyesObj.addEventListener("click", function(){
		alert("Winki!");
		});
var noseObj = document.getElementById("nosePic");
    noseObj.addEventListener("click", function(){
    	alert("Ahhhhhhh.");
	});
*/




/*
Template.body.onRendered(function(){
	var canResponse = function(){
	return "I beg your pardon?";
};
*/


/*
Template.mainSection.helpers({
	
	receiveString: function(str1, str2) {
    let result1 = length(str1)
    let result2 = length(str2)
    if (result1 < result2) {
    	return str1;
    }
    if (result1 > result2) {
    	return str2;
    }
  }  
});
*/
		
	

	

/*
});
Template.mainSection.helpers({
	getData: function() {
		return "Here's your data!";
	},
	testHelper: function(){
		return "This data is yours!";
	},	
	stringCombine: function(str1, str2) {
		return str1+" "+str2;
	},
	multipler: function(num1, num2) {
		let product = parseInt(num1) * parseInt(num2);
		return product;
	},
	//alert("Main Section loaded!");
});
*/



	/*
	getNumber: function(){
		return number.get();

	}
	*/




Session.setDefault("currentPage", "frontPage");


Template.body.helpers({
    checkCurrentPage: function(page){
    	return Session.equals("currentPage", page);
    }
});



var stupidResponse = function() {
  return "I beg your pardon?";
};

Template.formSection.helpers({
});

Template.formSection.events({



/*
	//#是ID觸發的事件
	"click #increase": function() {
		let curNum = number.get();
		number.set(curNum+1);
    },

    "click #decrease": function() {
	    let curNum = number.get();
		number.set(curNum-1);
    },
*/


	"click #submitMsg": function(event) {
		event.preventDefault();
	 let myMsgObj = document.getElementById("myMsg");
	 let myMsg = myMsgObj.value;
	 let conBoxObj = document.getElementById("conversationBox");
	 let oldConversation = conBoxObj.value;
	 let newCoversationBox = oldConversation+"\n"+"You: "+myMsg;
	 let ELIZAResponse = stupidResponse();
	 newCoversationBox = newCoversationBox+"\n"+"Eliza:"+ELIZAResponse;
	 conBoxObj.value = newCoversationBox;
	 myMsgObj.value = "";
	},
	//.是html物件觸發的事件
	"click #resetMsg": function() {
		let conBoxObj = document.getElementById("conversationBox");
	conBoxObj.value = "Eliza: How are you doing?";
		//alert("A button is clicked");
	}
});

Template.frontPage.events({
	"click #enterMain": function() {
		Session.set("currentPage", "home");
	}
});












/*
var htmlObj = document.getElementsByClassName("button");
console.log(htmlObj);

var htmlObj = document.getElementById("conversationBox");
htmlObj.value = "The value is changed!";



var alert = function(event) {
	event.preventDefault();
	alert("Submitting a message!");
}
htmlObj.addEventListener("click", alert);





htmlObj.addEventListener("click", function(event)
{
	event.preventDefault();
	alert("Submitting a message!");
	htmlObj.removeEventListener();
});
*/




















/*
var students = ["John", "Mary", "Tim", "David", "Tony", 
                "Amy","Jim","Kerry","Mike","Stern"];

var rollCall = function(){
    let randomIndex = Math.random() * 10;
    randomIndex = Math.floor(randomIndex);
    let studentName = students[randomIndex];
    let nameMessage = studentName + " is presenting today!";
    return (nameMessage);
};
for (let callNum = 1; callNum < 3; callNum++) {
	console.log(rollCall());
}
*/
















/*
var fakeGoogleMap = function(yourPlace, destination){
    let fakeDistance = Math.random() * 100;
    let disMessage = 
    "The distance between "+yourPlace+"and"+destination+"is"
    +fakeDistance+"km.";
    return disMessages;
};


console.log(fakeGoogleMap("Taipei","Hsinchu"));*/




/*
var myFirstBike = {
    brand: "GIANT",
    when: 1993,
    color: "red",
    price: 5500,
    stolenYears: [1995, 2000, 2004]
};

console.log(myFirstBike.stolenYears);

var stolenYears = myFirstBike.stolenYears;

console.log(stolenYears[0]);
*/




/*var coffeeMachine = {
	makeEspresso: function(){
		console.log("Here's your espresso!")
	},
	makeLatte: function(){
		console.log("Here's your Latte!");
	},
	makeAnything: function(request){
		console.log("Here's your "+request);
	}
};
//呼叫coffeMachine裡不同功能//
coffeeMachine.makeEspresso();
coffeeMachine.makeLatte();
coffeeMachine.makeAnything("oolong tea");
*/


/*
var emptyObj = {};

emptyObj.price = 5500;
console.log(emptyObj.price);

delete emptyObj.price;
console.log(emptyObj.price)
*/


/*
var numbers = [1, 2, 3, 4, 5];

for (let i = (numbers.length-1); i >= 0; i--) {
     console.log(numbers[i]);
}
*/


/*
var numbers = [25, 98, 1, 17, 20, 39];
var hugeNums = [];

for (let i = 0; i < numbers.length; i++) {
	 let num = numbers[i];
	 if(num > 30){
        hugeNums.push(num)
	 }
     else{
     	console.log(num);
     }
}

console.log(hugeNums);
*/


/*
var str = "This is a string.";
//(x,y) x取代為y
str = str.replace("string", "message");
console.log(str);
//以" "來做區隔後得出的資料陣列
var words = str.split("is");
console.log(words);
*/





















/*
numbers.push(18);
//push是新增你輸入的東西到陣列最後一個位置
console.log(numbers.length);
console.log(numbers);
//numbers陣列裡面第2筆資料的位置
console.log(numbers.indexOf(2));
console.log(numbers.indexOf(66));
//第二筆資料是否存在陣列
console.log(numbers.includes(100));

//指定變數某個位置的數字
numbers[10]=22;
console.log(numbers);




/*
for (let indexNum = 0; indexNum < 6; indexNum++) {
	let randomNum = Math.random()*10;
	randomNum = Math.floor(randomNum)
	numbers.push(randomNum);
}
  console.log(numbers);
*/




/*
var Mike = {
	age:28,
	gender:"Male",
	height:180,
	weight:79
};

Mike["age"] = 30;
console.log(Mike["age"]);
*/





/*
var numbers = [10, 20, 30, 40, 50];
//              0   1   2   3   4
var emptyArray = [];
var Mike = [28, "Male", 180, 79, "Married"];
var names = ["Mike", "John", "Mary", "Tom"];
var ages = [27, 18, 65, 9];
for (let index=0; index<5; index++) {
	console.log(names[index]);
	console.log(ages[index]);
}
*/











/*
console.log(numbers[arrayIndex]);
console.log(numbers[0]);
console.log(numbers[2]);
numbers[0] = 100;
console.log(numbers);*/












/*
var name1="Jessica", name2="Jason", name3="Tom";
var age1 = 18, age2 = 40, age3= 22;

var ageComment = function(name, age){
if (age<20){
	console.log(name+", you're so young!");

}
else{
    console.log(name+", you're an adult!")

}
};
ageComment(name1, age1);
ageComment(name2, age2);
ageComment(name3, age3);
*/



/*
var name1="Jessica", name2="Jason", name3="Tom";
var messageJessica= "How are you?", messageJason= "Hi", messageTom="Nope"

var response = function(name, message){
if (message==="How are you?") {
	console.log("Good. How are you?"+name);
}
else{
	console.log("Go away,"+name);
}
};
response(name1, messageJessica)
response(name2, messageJason)
response(name3, messageTom)
*/



/*
var adding = function(x, y){
 let result = x+y;
 return result;
};

var finalResult = adding(3,5);
console.log("The result is "+finalResult)
*/








/*
var sayHi = function(){
	console.log("Hello!");
};

sayHi();*/





/*var result = 0;

for (let index=0 ; index<=100 ; index++){
result = result + index;
}

console.log(result);*/




/*
for (let age=0 ; age < 99 ; age++) {
   if (age=== 0) {
   	console.log(age+" :Welcome to the World!");
   }
   else if (age===25) {
   	console.log(age+" :You're so energetic!");
   }
   else if (age===75) {
   	console.log(age+" :You've changed a lot.");
   }
   else if (age===99) {
   	console.log(age+" :Your time has come."); //QQ
   }
}
*/










/*
var x = 5, y = 10;

if (x>y) {
 let result = x * y;
 console.log(result);
}
else{
 let result = x / y;
 console.log(result);
}*/








/*var globalvar = "I am everywhere!";

{
	let localvar = "I am invisible somewhere!";
	console.log(localvar);
	var globalvar = "I'm everywhere!"
}

console.log(globalvar);*/








/*
var lecturer = "Tsung-Ying";
//I'm sooooooo sleepy
if(lecturer==="Tsung-Ying"){
	console.log("I'll think about it.");
}
else if (lecturer==="A-Mei") {
	console.log("What!? I'll be there!")
}
else{
	console.log("Nope")
}
*/



/*
var temp = 10;
if (temp>=30) {
	console.log("It's damn hot!!")
}
else if (temp>26) {
	console.log("大於26度!")
}
else{
	console.log("Winter is coming!!")
}

*/




/*var helloMessage = "Hello World!";
console.log (helloMessage);
helloMessage = 3;
console.log(helloMessage);*/

/*var fruit = "apple", appleNum = 3;
console.log (fruit);
console.log (appleNum);*/


/*var studentNum = 7, teacherNum = 1;
var allPeopleNum = studentNum + teacherNum;
console.log(allPeopleNum);

var x = 5, y = 8;
var result = x*y;
console.log(result);

var result = x/y
console.log(result);

var result = x**y
console.log(result);*/

/*
var question = "What's your name?";
var answer = "john.";
var conversation = question+" "+answer
console.log(conversation);


var numberMessage = "The total number is: ";
var totalNum = 10;
conversation = numberMessage+totalNum;
console.log(conversation);


var longMsg = "This is a long message!";
var trivialWord = "long";
var shortMsg = longMsg - trivialWord;
console.log(shortMsg);
*/

/*
var x = 8, y = 10;
if (x===y) {
console.log("The two number are unequal.");
}
else if(x>=y) {
console.log("x is not smaller than y.")
}
else {
console.log("Something else.");
}
*/