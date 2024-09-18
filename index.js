/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

function concatenate(...args) {
    return args.join(' ');
}



console.log(concatenate('a','b'))
// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

function newWord (word1, word2) {
    let w1 = word1.split('');
    let w2 = word2.split('')
    w1[word1.length -1] = w1[word1.length - 1].toUpperCase() ;
    w2[word2.length -1] = w2[word2.length - 1].toUpperCase() ;
    return w1 + ' ' + w2
  }

// Print the cameLtaiL-formatted string

console.log(newWord)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
function tip(money, percent) {
    return money*percent/100
  }

// Print out the tipAmount

console.log(tip(84,15))


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// Print the generated random number

console.log(getRandomInt(10))


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
false
const expression2 = a || b;
true
const expression3 = !a && b;
false
const expression4 = !(a && b);
true
const expression5 = !a || !b;
true
const expression6 = !(a || b);
false
const expression7 = a && a;
true