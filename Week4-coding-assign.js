/*1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    1.a Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        Do not use numbers to reference the last element, find it programmatically.
        ages[7] - ages[0] is not allowed! /*
        do this----> subtract the first element from the last
let myArray = ['Chris', 'Carole', 'Lucinda', 'Rachel'].length
myArray[2] -- don't do this, it's not always the 3rd indexed item
    Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    Use a loop to iterate through the array and calculate the average age.*/
    //set up the array with the [], I used const or let is good to use here, because we do not to change stuff.
    //I could have used a loop to iterates over each element in the array, but use of console was shorter
    console.log("number 1");
const  ages = ["3", "9", "23", "64", "2", "8", "28", "93"];
console.log(ages);

 // Used the .length-1 method instead of the ages[2] do not know the length so use of .length-1 is used, took out 93.
 console.log("number 1.a");
    console.log(ages[ages.length-1]); 
    
    //playing around-delete later
//function removeElements(ages) {
    //while (ages.length > 0) {

    //Adding a new age which is 16--out come is  9 in the array?? -9 is the # of # in the array 
console.log("number 1.b");
    console.log(ages.push("16"));

    //printing the new ages
    console.log(ages);
    //repeating the step above to works different length, it took 16 out.  I used .length-1 to take the last element out, because we do not know what the last
    //element was so the use of .length-1 is better.
    console.log(ages[ages.length-1]);

    //********Use a loop to iterate through the array and calculate the average age.********
    //Need to // to the other return sum to get them to work*****************
    // The .length will calculate the "length" of the average age, the [i] is to access the individual names or ages in the array
    //during each iteration of the loop
       for( var i =0;  i <ages.length; i++) {
        console.log(ages[i]);
       }
       // return sum / i;
        //}
  

 //console.log(age(["3", "9", "23", "64", "2", "8", "28", "93"])); 
 
 //Array.prototype.average = function(){
   // var sum = 0;
    //var count = this.length;
    //for (let i = 0; i < count; i++) {
      //  sum += this[i];
        
   // }
    //return sum/count
 //}
 //console.log(age(["3", "9", "23", "64", "2", "8", "28", "93"]))

 /*function addingMachine(x){
    let  = 0;
    for(let i = 0; i < x.length; i++){

    sum += x[i];
    }
return sum;
}*/

//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
console.log("number 2");
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names);
 // How to get the names going down.
 for (let i = 0; i < names.length; i++) {
    console.log(names[i]);  
 }

  //   2a.Use a loop to iterate through the array and calculate the average number of letters per name.
  //In this example totalLetters is used to keep track of the sum of the legths of all names.
  //Than we iterate throught the names using a loop and add the .length of each name to the let totalLetters =0 variable.
  //The is 0 is a simple way of starting, totalLetter is being used to track the sum of the length of all the names
  //after the loop, we calculate the average number of letters per name by dividing the totalLetters by the number of names in the array(names.length)
  //The result is stored in the averageLetter which is used to console.log it.  The [i] is used to acces the names or ages.
  console.log("number2a.");
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];  
let totalLetter = 0
for (let i= 0; i < names.length; i++) {
    totalLetter += names[i].length;
   
} let averageLetters = names.length;
console.log('average number of letters per name:', averageLetters);
//    2b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
//same loop use the totalLetter start is changed to function with the .join instead of the .length.  It is this part in here that 
console.log("number2b");
for (let i = 0; i < names.length; i++) {
    totalLetter += names[i].join;
    console.log(names.join(' ,'));
}
//3.How do you access the last element of any array?**
console.log("number 3");
console.log(names[names.length-1]); 

//4.What synatax do you use to  access the first element of any array?  How do you access?
//made sure to use the firstElement to print that to the console, the use of name just creates
//a list of names.  The use of shift modifies the original array by removing/returning the first element
//I the index '[0]' even though we still know the first name is, I am thinking
console.log("number 4");
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let firstElement = names[0];
console.log(firstElement); 
//5.Create a new array called nameLengths. Write a loop to iterate over the previously 
//created names array and add the length of each name to the nameLengths array.
//nameLengths store the lengths of the names, the use of the loop to iterate over each name in the names array.
//each iteration we access the length of the current name using names[i].length and use .push to add that length to the nameLengths array
//For example:
//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array
console.log("number 5");
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = [];  //Why does .push work? .push is something to add into a new array, it pushes it into the names to create a total length
for (let i = 0; i < names.length; i++) {
nameLengths.push(names[i].length);
}
console.log(nameLengths);
//6.Write a loop to iterate over the nameLengths array 
//and calculate the sum of all the elements in the array.
//Me. The for loop when I put in useds const element = array[index]; is used to assign the current element of the array to a variable for further processing within the loop
//We just need the sum and the += to add nameLengths[i]
console.log("number 6");
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
    console.log(sum);   
}
console.log('Sum of all elements in array', sum);
//7.Write a function that takes two parameters, word and n, 
//as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').  If a is a string and b is the #you 
//would use this to pass 3 in to Hello 
console.log("number 7");
let someFunction = (a, b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
      result += a;
    }
    return result;
  };
  
  console.log(someFunction('Hello', 3));
  
  //8.Write a function that takes two parameters, firstName and lastName, and returns a full name. 
  //The full name should be the first and the last name separated by a space.
  //we to write out the variable of firstName and lastName, then to print it we would console.log it with a concatination, concat the space in there.
  console.log("number 8");
  var firstName = 'Jean Luc';
  var lastName = 'Picard';
  console.log (firstName + " " + lastName);
  //9.Write a function that takes an array of numbers 
  //and returns true if the sum of all the numbers in the array is greater than 100. 
  //We use function for this and use numbers as the paramater, which is also used in the i<numbers.length.  We have to write some arrays also to make this work

  //**************************NEED TO DO // TO MAKE #2 WORK************************
  console.log("number 9");
  function array(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        
    }
    return sum > 100;
  }
  let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 50];
  let array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110,];
  let array3 = [ 3, 5, 7, 9, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
  console.log(array(array1));
  console.log(array(array2));
  console.log(array(array3));

  //10Write a function that takes an array of 
  //numbers and returns the average of all the elements in the array.
  //We need .length again to find the length of the arrayOfNumber, we use [i] to access the index of these arrayOfNumber
console.log("number 10");
let arrayOfNumber =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 50]; 
let returnsAverage = 0
for (let i= 0; i < arrayOfNumber.length; i++) {
    returnsAverage += arrayOfNumber[i].length;
} let average = arrayOfNumber.length;
console.log('average number of all elements in the array:', average);

//11.Write a function that takes two arrays of numbers and returns 
//true if the average of the elements in the first array 
//is greater than the average of the elements in the second array.
//My explanation if oneArray is greater than the average of the twoArray, the getAverage function is the function that calculates the average of an array
// The use of === did not work because it compared the two.  I took the example of speakFriend in Week3, I figured out what to put in the console.log for the (a)
//it still failed on me becuase the other inbetween stuff was wrong, and the speak Friend is more of comparing a statement, this is a greater than. 
console.log("number 11");
var oneArray = [ 3, 4,12, 14, 6, 7, 9, 18, 20, 10, 40];
var twoArray = [6, 9, 4, 8, 5, 16, 18];

function arrays(oneArray, twoArray) {
    var averageOne = getAverage(oneArray);
    var averageTwo = getAverage (twoArray);
        return averageOne >averageTwo;
    }
    function getAverage(array) {
        var sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum +=array[i];      
        }
        return sum / array.length;      
    }
console.log(arrays(oneArray, twoArray));

//12.Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//The function needs to be an if statemnet to check if both condition is true the reason for the &&
//the boolean isHotOutside that is suppose to return true and if moneyInPocket is > than 10.50
//both isHotOutside and moneyInPocket are paramaters which get put into the function statement
//and are used to call the function
console.log("number 12");
var isHotOutside = true;
var moneyInPocket =5.50;
function willBuyDrink(isHotOutside, moneyInPocket) {
if (isHotOutside && moneyInPocket > 10.50){
    return true;
}else{
    return false;
    }
}
 
    console.log(willBuyDrink(isHotOutside, moneyInPocket));
//13.Create a function of your own that solves a problem. In comments, 
//write what the function does and why you created it.
//I am wanting to write an app to tell me how to spend in each life catagory, I will have to
//guesstemate my pay will be, I can get a ruff idea.  I started out on creating a list of what categories I want in the financial app.
//These are currently what I use.  I used an array to make the list, using the const variable.
//It would be my goal to create this list going down, and with spaces under each category to fill in.
const myLifeCategories = ['med&health', 'personal', 'food', 'ritsavings', 'regsavings'];
console.log(myLifeCategories);

//Below this I decided to get some ideas for making this financial app function, and used chatbot to get there.
function calculateSpendingAmounts(salary) {
    const categories = {
      category1: 0.2,
      category2: 0.3,
      category3: 0.25,
      category4: 0.15,
      category5: 0.1
    };
  
    const spendingAmounts = {};
    for (const category in categories) {
      if (categories.hasOwnProperty(category)) {
        spendingAmounts[category] = salary * categories[category];
      }
    }
  
    return spendingAmounts;
  }
  


