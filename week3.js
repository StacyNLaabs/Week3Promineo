//Create an array called ages - values: 3, 9, 23, 64, 2, 8, 28, 93.


var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages); // display ages to confirm array is visible

// Subtract the last element (programmatically) in the array from the first element in the array: 

var subAges = ((ages[ages.length - 1]) - ages[0]);

//Printing to the console:
console.log(subAges);

// Add a new age to your array and repeat

ages.push(101);

console.log(ages)

// Subtract the last element in the UPDATED array from the first element in the array: 
var subAges = ((ages[ages.length - 1]) - ages[0]);

console.log(subAges);

//Use a loop to iterate through array and calculate the average age.

let total = 0;   //total variable - track of the total of the ages added together

for (let i = 0; i <= ages.length - 1; i++) {
    total = ages[i] + total;
    //console.log(total);      //print to make sure our total
}

let average = (total / ages.length);  //adding in average variable; dividing our total equation by the length of our array
console.log(Math.round(average));   //added Math.round to the average.

//Question #2

//Create array called 'names': name values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//Loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

function gettotal(accumlator, currentvalue) {
    return accumlator + currentvalue;
}
function getLength(name) {
    return name.length;
}
const avg = names.map(getLength).reduce(gettotal, 0) / names.length;

// const avg = names.map(name => name.length);
console.log("avg", avg, names);




let letters = 0;
for (let i = 0; i < names.length; i++) {  //iterating and receiving each names length in the array
    letters += names[i].length;            //note to self; [i] before length gives you the: total  (23)
}
console.log(letters);                  // 23, so that's good. 
console.log(letters / names.length); // average 

//b.	Use a loop to iterate through the array again and concatenate all the names together, 
//separated by spaces, and print the result to the console.


let seperate = " ";                               //setting up empty string variable
for (let i = 0; i <= names.length - 1; i++) {

    seperate = seperate + ' ' + names[i];            //concatenating our name elements together with spaces
    console.log(i, names[i], seperate);
}
// for (let i = 0; i < names.length; i++) {
//     seperate = seperate + ' ' + names[i];            //concatenating our name elements together with spaces

// }
console.log(seperate);  // output of names together sepearted by space

// Create a new array called nameLengths. Write a loop to iterate over the previously created names 
// array and add the length of each name to the nameLengths array

var namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //I don't know if we are suppose to use var or let; so I changed it up a bit. 
var nameLengths = [];                           //creating empty array 

for (let i = 0; i <= namesArray.length - 1; i++) {   //iterating through our initial array
    var namesArrayLength = namesArray[i].length;         //new variable to go through each names length 
    nameLengths.push(namesArrayLength);           //push into new string


    // nameLengths.push( namesArray[i].length);    
}
console.log(nameLengths);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).


function wordUse(word, n) {
    return word.repeat(n);                //Found repeat() method online as way to repeat a string n number of times, very cool!
}
console.log(wordUse("Hello", 6));

//8. Write a function that takes two param be the first and the last name separated by a space.

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}

console.log(fullName('Tom', 'Jones'));  //calling our function with with fun name in Vegas. 

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

var arrayNum = [3, 4, 6, 8, 500];    // array of numbers initialized

function numArray(array) {
    sum = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        sum = sum + array[i];        //sum of our initial array numbers
        //console.log(sum);        trick to make sure sum is calculating correctly
    }
    if (sum > 100) {
        return true
    }
    else {
        return false
    }
}

console.log(numArray(arrayNum));   //calling our function

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

var arrayNum2 = [3, 4, 6, 8, 1000];       // inital array of nums

function numAvg(array) {
    sum = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        sum = sum + array[i];
    }
    var avg = sum / array.length;             //creating our variable to calculate average
    return "The average of the elements in our array is: " + avg    //returning string with results to be used in our call
}

console.log(numAvg(arrayNum2));        //calling our function

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

var arrayA = [5000, 7, 9, 10];          //setting ini array input variables
var arrayB = [10000, 300, 400];

function arrayCompare(array1, array2) {
    suma = 0;
    sumb = 0;
    for (let i = 0; i <= array1.length - 1; i++) {
        suma = suma + array1[i];                       //Iterating through my arrays and calculating the sum of my input arrays
    }
    for (let i = 0; i <= array2.length - 1; i++) {
        sumb = sumb + array2[i];
    }
    var avga = suma / array1.length;                   //creating my average variables
    var avgb = sumb / array2.length;
    //console.log(avga);                    <--Double checking my averages
    //console.log(avgb);
    if (avga > avgb) {
        return true
    }
    else {
        return false
    }
}

console.log(arrayCompare(arrayA, arrayB));             //compared a few differtn numbers for both inital arrays, loooks like it works!!

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

var isHotOutside = false;                   //setting initial boolean hot outside value
var moneyInPocket = 15;                           //setting initial money value

function willBuyDrink(HotOutside, money) {
    if (HotOutside == true && money > 10.5) {           //both boolean operators have to be true (&&)
        return true
    }
    else {
        return false
    }
}

console.log(willBuyDrink(isHotOutside, moneyInPocket));        //tested with both boolean cases being true, and then one being false to see output change

//13. Create own function. Having trouble thinking of one. I may need to come back to this question.

//May push to committ if I can't think of a function to write. 








































