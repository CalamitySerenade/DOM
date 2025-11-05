const nums = [1, 2, 3, 4];
const doubled = nums.map(num => num * 2);
console.log(doubled);

const prices = [5, 10, 20];
const pricesWithTax= prices.map(price => price+2);
console.log(pricesWithTax);

/*Independent Practice: Turn array of names into uppercase
["a", "b"]
["A", "B"]
Convert Celsius to Fahrenheit
[0, 10]
[32, 50]
Take array of words & return length of each
["hi", "cat"]
[2, 3]
*/

const letters=["a","b"];
const lettersUpper=letters.map(letter => letter.toUpperCase());
console.log(lettersUpper);

const celsius=[0,10];
const fahrenheit=celsius.map(temp=>(temp*(9/5)+32));
console.log(fahrenheit);

const words=["hi","cat"];
const lengthWords=words.map(length=>length.length);
console.log(lengthWords);