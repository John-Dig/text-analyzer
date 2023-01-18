//Business Logic
//check function works
function wordCounter(text) {
  if (text.trim().length === 0){
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;//pulls wordCount out of two }}?
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) { 
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount ++
    }
  });
  return wordCount;
}  


//word-censor

function wordCensor(badWords, text) {
  const textArray = text.split(" ");
  let output = [];
  textArray.forEach(function(element) {
    if (element.includes(badWords)) {
      element = "CENSORED"; 
    }
      output.push(element);
    
  });
  return output;
  console.log(output);   
}