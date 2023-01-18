// //Business Logic
// //check function works
// function wordCounter(text) {
//   if (text.trim().length === 0){
//     return 0;
//   }
//   let wordCount = 0;
//   const textArray = text.split(" ");
//   textArray.forEach(function(element) {
//     if (!Number(element)) {
//       wordCount++;
//     }
//   });
//   return wordCount;//pulls wordCount out of two }}?
// }

// function numberOfOccurrencesInText(word, text) {
//   const textArray = text.split(" ");
//   let wordCount = 0;
//   textArray.forEach(function(element) { 
//     if (element.toLowerCase().includes(word.toLowerCase())) {
//       wordCount ++
//     }
//   });
//   return wordCount;
// }  



// Word Censor UI
window.addEventListener("load", function(e){
  window.addEventListener("submit", function(e){
    e.preventDefault();
    
    document.getElementById("outputArea").innerText = wordCensor(document.getElementById("text-passage").value);
  });
});

















// Word Censor Complete Business Logic
function wordCensor(text) {
  const textArray = text.split(" ");
  let output = [];
  textArray.forEach(function(element) {
    if (element.includes("shiz") || element.includes("shniz") || element.includes("piz") || element.includes("shnayblay")) {
      element = "CENSORED"; 
    }
      output.push(element);
    
  });
  const outputString = output.join(" ");
  return outputString;
}