
let numCorrect = 0;

function myFunction() {
  var x = document.getElementById("myText").value;
  var ans = 'George Washington';
  
  if(x == ans) {
    document.getElementById("answer").innerHTML = 'Congrats';
    
    numCorrect++;
    console.log(numCorrect + "Correct Answers");
  }
  else {
    document.getElementById("answer").innerHTML = 'Come on man';
    document.getElementById("pdfHelp").style.visibility = "visible";
  }

  document.getElementById("nextButton").style.visibility = "visible";
  
}

function next() {
  generateQuestions();
  document.getElementById("nextButton").style.visibility = "hidden";
  document.getElementById("answerImage").src = "";
  document.getElementById("answer").innerHTML = '';
  document.getElementById("pdfHelp").style.visibility = "hidden";

}

function generateQuestions() {
  console.log("This should be a number " + numCorrect);
  //display question based on how many correct answer
  if(numCorrect < 3) {
    document.getElementById("question").innerHTML = "Level 1 Question: Who was the first president?";
  }
  else if(numCorrect < 6) {
    document.getElementById("question").innerHTML = "Level 2 Question: Who was the first president?";
  }
  else if(numCorrect < 9) {
    document.getElementById("question").innerHTML = "Level 3 Question: Who was the first president?";
  }
}

function start() {
  //hide start page and show question page
  document.getElementById("startPage").style.visibility = "hidden";
  document.getElementById("questionPage").style.visibility = "visible";
  document.getElementById("nextButton").style.visibility = "hidden";
  document.getElementById("pdfHelp").style.visibility = "hidden";
  //show question
  generateQuestions();

}
