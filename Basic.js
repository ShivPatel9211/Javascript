document.write("hello world");
//alert("hay! this is shiv kumar chadhary")
 // var name=prompt("What is your name?")
 // console.log("My name is "+name)
 // var father =prompt("What is your father name?")
 // console.log("My father name is "+father)

//variale in java script
// There is two way of deceleration of variable 
//1.let
//2.var
// both are same we can use any one of  these
//eg...
//two type of variable ni java script
//1.Globle variable--> if the variable is declere out side of the function or method which can be accessed from any where is 
//called globle variable
// if 'var' keyword is not used while declearing the variable it will automatically bacome globle variable..
//2. Local Variable--->  if the variabe is decleared inside the function or method that can be used only that particular 
//function and method that is callle local variable... 
var num1=10;
console.log(num1)
num1 +=1;
console.log(num1)
var name='shiv'
console.log("My name is " +name)
//function is java scripts
//step to define function
//1.declere the function then
//2. call it
//eg...
//definig the function
/*function sonu() {
	 var name=prompt("What is your name?")
	 console.log("My name is "+name)
}
//calling the function
sonu();
// function with an argument
function sum(num1 ,num2){
	var result =num1+num2;
	console.log("The sum of the number is "+result)

}*/

//sum('ram', 'shayam');
//Different datatype in java script...
/*1.String
2. Array
3.Number
4.Boolean etc....
*/
//String
let name1='shiv'
console.log(name1)
console.log(name1.indexOf('s'))
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.length)
let random;	
console.log(random)
console.log(name1.slice(2,4))
console.log(name1.replace('s','S'))
console.log(name1.split(''))

//2.Array
//decleration of array..
//in java script array can have a multiple data type in singe array....
let fruit=['apple','orange','mango','pineapple'];
//calling the array
console.log(fruit);
// Another way of decleraring the array
let fruits= new Array('banana','pear','pine','grapes');
console.log(fruits[2]);
fruits[2]='kela'
console.log(fruits)
fruits.push('ram');//add new element to first of index
console.log(fruits)
fruits.pop()//delete the element of the last index
console.log(fruits)

//using loop in array
for(let i=0;i<fruits.length;i++){
	console.log(fruits[i])
}
console.log(fruits.toString());//convert into string
console.log(fruits.join('-'))//joinig all the element of the array
fruits.shift()//remove the first element of array
console.log(fruits)
fruits.unshift('lichhi')//adding an element at first index of array
console.log(fruits);
let allElement=fruit.concat(fruits);//concatination of two arrays
console.log(allElement)
allElement.reverse();//it reverse all the element in array
console.log(allElement)
console.log(allElement.sort())


let num =[3,4,2,5,1,0,34,43];
console.log(num)
num.sort(function(a,b){return(a-b)})//sorting arrry in accending order
console.log(num)
num.sort(function(a,b){return(b-a)})//sorting arrry in decending  order
console.log(num)



//Condittional statement...
//1.If else
//2.while
//.switch case


//if else
//var mark=prompt("what is your total mark?")
// if(mark>=80)
// {
// 	console.log("Distinstion");

// }else if((mark>=60)&&(mark<=80)){
// 	console.log("First division");
// } else if((mark<=60) &&(mark>=30)){
// 	console.log("second devision")
// }else{
// 	console.log("sorry!, you are fail")
// }

// switch case
var gender=prompt("M for male and F for female");
switch(gender){
	case 'M':
		console.log("Male");
		break;
	case 'F':
		console.log("Female");
		break;
	default:
		console.log("Your are from the other group")
}