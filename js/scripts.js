
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