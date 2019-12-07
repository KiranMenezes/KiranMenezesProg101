const myArray = [];

const numbers = [1, 2, 3, 5, 7,];

console.log(numbers);

console.log('Fourth item;', numbers[3]);
console.log(numbers[0]);
console.log('Length:', numbers.length);
console.log('Number 3:', numbers[numbers.length - 3]); 
numbers.push(25);
console.log(numbers);
numbers.pop();
console.log(numbers);

const cloudy = true;
const items = [1, 'two', [3, 4], false, null];
console.log(items);

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}                    

for (let number of numbers) {
    console.log(numbers);
}          

function arrayToString(array) {
    console.log(array.join(', '));
}

function stringToArray(input) {
    console.log(input.split(','));
}

arrayToString(["bundle.js", "*.js.map", ".c9"]);

    stringToArray("bundle.js, *.js.map, .c9");
 
    
    const myObject = {
        five: 5,
        six: 'six'
    };            

    console.log(myObject.five);
    console.log(myObject.six);
         

    myObject.newItem = 'This is a new item in my object.'
    console.log(myObject.five);
    console.log(myObject.six);
    console.log(myObject.newItem);