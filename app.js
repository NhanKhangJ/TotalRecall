                     /*Variable & Data types */
// 1. How do we assign a value to a variable?
// let/var/const Varibale = "Hi" 

// 2. How do we change the value of a variable?
// Variable = "Hello" 

// 3. How do we assign an existing variable to a new variable?
// let variable1 = 10;
// let variable2 = variable1;

// 4. Remind me, what are declare, assign, and define?
// Declare is put a value or diffrent data type inside variable
// Assign is replace the existing value with a diffrent value 
// define some variable with name and data types

//5. What is pseudocoding and why should you do it?
 //  simplified programming language, used in program design.

//6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
 // 1hour

 
// STRINGS 

// let firstVariable = "Hello World";
// firstVariable = 25;
// let secondVariable = firstVariable;
// secondVariable = "change to a string";

// var yourName = "Nhan Khang Le";
     
// console.log(`Hello, my name is ${yourName}`) // Hello, my name is Nhan Khang Le


// //BOOLEANS
// const a = 4; 
// const b = 53; 
// const c = 57; 
// const d = 16; 
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d); 
// console.log('Name' == 'Name');
// //use && OR 

// console.log(true || false); 
// console.log(false && false && false && false && false || true); 
// console.log(!false || false)
//  console.log(e == 'Kevin'); 
// console.log(a + b == c);
// console.log(a * a == d);
// console.log(48 == '48');

 // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');


//the Farm
// let animal = "cow";
// // if(animal === "cow"){
// //     console.log('Moo')
// // } else {
// //     console.log('This animal is not a cow')
// // }
// animal === "cow" ? console.log('Moo') : console.log('Hey! You are not a cow')

// //Driver's Ed

// let personAge = 15;
// personAge >= 16? console.log("Here are the keys!") : console.log("Sorry, you're too young.")


//LOOPS

//The Basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }
// //Write a loop that will print out all the numbers from 10 up to and including 400
// let i = 10;
// while (i <=400){
//     i++;
//     console.log(i)
// } 
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
// 
// for (i = 12; i <= 4000; i += 3){
//    console.log(i);
// }

// for (i = 12; i <=4000; i++){
//     if (i%3=== 0){
//         console.log(i)
//     }
// }


//Get Even
// for (i=0; i <= 100; i++){
//     if(i%2===0){
//         console.log(i+ "<-- is an even number");
//     }
// }


//Give Me 5
//  for (i= 1; i <=100; i++){
//      if(i%5===0 && i%3 === 0){
//          console.log(`I found a ${i}. Three is a crowd. I found a ${i} and High five!`)
//      } else if (i%5 === 0){
//         console.log(`I found a ${i} High five!`);
//      } else if (i%3=== 0 ){
//         console.log(`I found a ${i} Three is a crowd`)
     
//      }
//  }
//Savings Account

// let back_accout = [];

// for (let i =1; i<=10; i++){
//     back_accout.push(i);
// }
// console.log(back_accout.reduce((previousvalue, currentvalue)=> previousvalue+currentvalue, 0)) //0 is the initial value

// let bank_account =0

// for (i=1; i<11; i++){
//     bank_account += i
// }

//    console.log(bank_account)

// let bank_account1 =0

// for (i=1; i<101; i++){
//     bank_account1 += i*2;
// }
//    console.log(bank_account1)

//ARRAYS & CONTROL FLOW
//What are the things in an array called? Do Arrays guarantee those things will be in order? What real-life thing could you model with an array?
// Element 
// Array has index oreder but no alphabet order or numeric order 
// a shopping list

// const quotes =["Nhan", "Rich", "Govenor"];

// //accecsing elemnt

// // How do you access the 1st element in the array?
// //square bracket to access the index of the array'


// //change the value
// const randomThings = [1, 10, "Hello", true]
// randomThings[2]="World";

// //check the value
// console.log(randomThings[2])

// //Change value

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// //access element 3rd
// console.log(ourClass[2]);

// ourClass[4] ="OctoCat";
// ourClass.push('Cloud.city');

// //Mix it up
// const myArray = [5, 10, 500, 20];

// // add string to the end of array
// myArray.push("Aegon");
// myArray.push("Dragon");


// //remove 5
// myArray.shift(0);

// //add bod marley to the beginning of the array
// myArray.unshift('Bob Marley');

// //remove the string of your choice
// myArray.pop(myArray.length-1);
// console.log(myArray)

// //reverse
// myArray.reverse();
// console.log(myArray);

// //Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// //Yes,
// //decide what happen with the array 
// //no, it just the reverse the index order of each element in the arra

// // Biggie Smalls
// let number = 100;
// if (number <100){
//     console.log("little nubmer")
// } else {
//     console.log('big number')
// }
// // Monkey in the Middle
// let number1 = 6;
// if (number1 <= 5){
//     console.log('litle number')
// } else if(number1 >=10 ){
//     console.log('big number')
// } else{
//     console.log('monkey');
// }


//What's in our closet 

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

// //   {
// //     "firstName": "John";
// //     "lastName": "Smith";
// //     "age": 25
// //   }

// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];
//   //What kristyn wearing today

//   //1. bracket notation
//   console.log("Kristyn is rocking that " +kristynsCloset[2]+ " today!")
//   //2. add item using push kristyn
//   kristynsCloset.splice(kristynsCloset.length - 1, 0 , "raybans" );
//   kristynsCloset[kristynsCloset.length - 3]="stained knit hat" ; //kristynsCloset[5]
//   console.log(kristynsCloset);
//   //3. access first elemnt tom shirst array

//   console.log(thomsCloset[0][0]);
//   //acsee Thom's accessories
//   console.log(thomsCloset[2][3])

//  //Log a sentence about what Thom's wearing.
//  console.log(`Thom is looking fierce in ${thomsCloset[0][2]}, ${thomsCloset[1][1]}, ${thomsCloset[2][1]}`);
//  // Modify the name of his PJ pants to Footie Pajamas.
//  thomsCloset[1][2] ="Footie Pajamas";
//  console.log(thomsCloset[1][2])

 //Functions

//printGreeting

// function printGreetingwith(name){
//   return "Hello there "+ name;
// }
// console.log(printGreetingwith("khang"))

// //printCool
// function printCoolthat(name){
//     return name + ' is cool';
// }
// console.log(printCoolthat("Nhan"));

// //Calculate cube
// function calculateCube(number){
//    return number*25;
// }

// console.log(calculateCube(5));

// isVowel
// function isVowel(charater){    
//     let AEIOU = ["a","e","i","o","u"];
//     let  input = charater.toLowerCase();
//      if (AEIOU.includes(input)=== true){
//          return true;
//        } else{
//      return false;
//       }
//      }
//  console.log(isVowel('a'))

// getTwo Lengths 
// function getTwoLengths(param1,param2){
//     return [param1.length, param2.length]
// };
// console.log(getTwoLengths("Hank", "Hippopopalous"));

//getMutipleLengths;

// function getMultipleLengths(numberArray){
//   let newArray = []
//   numberArray.forEach(element => {
//    newArray.push(element.length)
//   });
//   return newArray;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//MaxOfThree

// function maxOfThree(a,b,c){
//     if (a >= b && a >=c){ 
//          if (a === b && a > c) { //
//             return a;
//         } else if(a === c && a > b ){
//             return a;
//          }else if (a > b && a > c){
//             return a;
//         } else if (a === b && b === c) {
//             return "they are equal"
//         } 
//     } else if(b >= a && b >= c){
//           if (b === c && b >a ){
//             return b;
//           } else if(b>a && b >c){
//             return b;
//           }     
//     } else if(c > a && c > b){
       
//             return c; 
//     }  
// }
// console.log(maxOfThree(17, 11, 17)); 

// printLongestWord

function printLongestWord(inputArray){
 //let find all the length of the input Array
    let newArray = []
    inputArray.forEach(element => {
    newArray.push(element.length);
    });
 //Math.max()to find the bigest length in the newArray that we created;
   let highestLength =  Math.max(...newArray);
 //let find the result with filter or for loops
                  /*filter */
    let result = inputArray.filter(element => 
        element.length === highestLength //the unique condition help me take out the element has the bigest length
        );                                  
    return result.toString();
                  /*for loops*/
    // for (let i = 0; i <inputArray.length;i++){
    //     if (inputArray[i].length === highestLength){
    //         return inputArray[i];
    //     }
    // }
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd", "MicroCenterUniverse"]));