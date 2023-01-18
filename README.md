## Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

## Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I Like red, green and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

## word-censor






## test .0
Test: "It should censor 1 specified word, case sensitive, preliminary test only 1 word."
Code:
const word = "shiz";
const text = "hello muffins, stay out of the shiz"
wordCensor(badWord, text);
Expected Output: "CENSORED"
## test .1
Test: "It should return an arry with bad word censored."
Code:
const word = "shiz";
const text = "hello muffins, stay out of the shiz"
wordCensor(badWord, text);
Expected Output: ['hello', 'muffins', 'stay', 'out', 'of', 'the', 'CENSORED']
## test .2
Test: "It should return the string with bad word censored."
Code:
const word = "shiz";
const text = "hello muffins, stay out of the shiz"
wordCensor(badWord, text);
Expected Output: 'hello muffins stay out of the CENSORED'

## test .21
Test: "It should return the string with bad word censored. Now hardcoding bad word"
Code:
const word = "shiz";
const text = "hello muffins, stay out of the shiz"
wordCensor(badWord, text);
Expected Output: 'hello muffins stay out of the CENSORED'





## test .3
Test: "It should now return a string with 4 bad words censored. Hard coding in words, changing to single argument input"
Code:
Bad words (now hardcoded) = "shiz, shniz, piz, shnayblay";
const text = "hello muffins, stay out of the shiz, shniz, piz, and shnayblay"
Expected Output "hello muffins, stay out of the CENSORED, CENSORED, CENSORED, and CENSORED"


## test .4 
Test: "it should return a string with 4 bad words censored, now with --- to the number of characters of bad word.
Code:
Bad words = "shiz, shniz, piz, shnayblay";
const text = "hello muffins, stay out of the shiz, shniz, piz, and shnayblay"
Expected Output: "hello muffins, stay out of the ----, -----, ---, and ---------"


## test .9
Test: ".4, just adding output








## test 1.0
Test: ".4 should work with UI"
Code:
Bad words =  "shiz, shniz, piz, shnayblay";
const text = "hello muffins, stay out of the shiz, shniz, piz, and shnayblay"
Expected Output: "hello muffins, stay out of the ----, -----, ---, and ---------"