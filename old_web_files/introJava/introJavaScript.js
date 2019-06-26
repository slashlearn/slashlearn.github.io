//********** LESSON 2 JS **********
function change2(input) {
    var x = document.getElementById("ex2");
    var y = document.getElementById("hideB2");
    var hideButton = "<button class=\"hideButton\" onclick=\"change2(4)\">Hide</button>";
    var message1 = "<img src=\"2.2.1ex.PNG\">";
    var message2 = "<img src=\"2.2.2ex.PNG\">";
    var message3 = "<img src=\"2.2.3ex.PNG\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}


function change3(input) {
    var x = document.getElementById("ex3");
    var y = document.getElementById("hideB3");
    var hideButton = "<button class=\"hideButton\" onclick=\"change3(4)\">Hide</button>";
    var message1 = "<img src=\"2.3.1ex.PNG\">";
    var message2 = "<img src=\"2.3.2ex.PNG\">";
    var message3 = "<img src=\"2.3.3ex.PNG\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }
    
}


function funct2l5e(reset){
    var x = document.getElementById("centerIMG");
    if(reset == 1){
	x.innerHTML = "<img src=\"2.5varExam.png\">";
    }
    else if(x.innerHTML == "<img src=\"2.5varExam.png\">"){
	x.innerHTML = "<img src=\"2.5.1ex.png\">";
    }
    else if(x.innerHTML == "<img src=\"2.5.1ex.png\">"){
	x.innerHTML = "<img src=\"2.5.2ex.png\">";
    }
    else if(x.innerHTML == "<img src=\"2.5.2ex.png\">"){
	x.innerHTML = "<img src=\"2.5.3ex.png\">";
    }
    else if(x.innerHTML == "<img src=\"2.5.3ex.png\">"){
	x.innerHTML = "<img src=\"2.5.4ex.png\">";
    }
    else if(x.innerHTML == "<img src=\"2.5.4ex.png\">"){
	x.innerHTML = "<img src=\"2.5.5ex.png\">";
    }
    else if(x.innerHTML == "<img src=\"2.5.5ex.png\">"){
	x.innerHTML = "<img src=\"2.5.6ex.png\">";
    }
    else{
	x.innerHTML = "<img src=\"2.5.1ex.png\">";
    }
}

function functEx2Ans(){
    var x = document.getElementById("exer2ans");
    if(x.innerHTML == "<img src=\"2.7.2.PNG\">")
	x.innerHTML = "";
    else
	x.innerHTML = "<img src=\"2.7.2.PNG\">";
}

//********** END OF LESSON 2 JS **********

//********** LESSON 3 JS **********
function change3ex4(input) {
    var x = document.getElementById("3ex4");
    var y = document.getElementById("hideB2");
    var hideButton = "<button class=\"hideButton\" onclick=\"change3ex4(4)\">Hide</button>";
    var message1 = "<img src=\"3.4.1ex.PNG\">";
    var message2 = "<img src=\"3.4.2ex.PNG\">";
    var message3 = "<img src=\"3.4.3ex.PNG\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}


function change3ex5(input) {
    var x = document.getElementById("3ex5");
    var y = document.getElementById("hideB5");
    var hideButton = "<button class=\"hideButton\" onclick=\"change3ex5(6)\">Hide</button>";
    var message1 = "<img src=\"3.5.1ex.png\">";
    var message2 = "<img src=\"3.5.2ex.png\">";
    var message3 = "<img src=\"3.5.3ex.png\">";
    var message4 = "<img src=\"3.5.4ex.png\">";
    var message5 = "<img src=\"3.5.5ex.png\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message4 && input == 4){
	x.innerHTML = message4;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message5 && input == 5){
	x.innerHTML = message5;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}
//********** END OF LESSON 3 JS **********

//********** LESSON 4 JS **********

function change4l1e(input) {
    var x = document.getElementById("personClass1");
    var y = document.getElementById("hideB1");
    var hideButton = "<button class=\"hideButton\" onclick=\"change4l1e(7)\">Hide</button>";
    var message1 = "<img src=\"4.1.1ex.png\">";
    var message2 = "<img src=\"4.1.2ex.png\">";
    var message3 = "<img src=\"4.1.3ex.png\">";
    var message4 = "<img src=\"4.1.4ex.png\">";
    var message5 = "<img src=\"4.1.5ex.png\">";
    var message6 = "<img src=\"4.1.6ex.png\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message4 && input == 4){
	x.innerHTML = message4;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message5 && input == 5){
	x.innerHTML = message5;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message6 && input == 6){
	x.innerHTML = message6;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}

function change4l2e(input) {
    var x = document.getElementById("personClass2");
    var y = document.getElementById("hideB2");
    var hideButton = "<button class=\"hideButton\" onclick=\"change4l2e(7)\">Hide</button>";
    var message1 = "<img src=\"4.2.1ex.png\">";
    var message2 = "<img src=\"4.2.2ex.png\">";
    var message3 = "<img src=\"4.2.3ex.png\">";
    var message4 = "<img src=\"4.2.4ex.png\">";
    var message5 = "<img src=\"4.2.5ex.png\">";
    var message6 = "<img src=\"4.2.6ex.png\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message4 && input == 4){
	x.innerHTML = message4;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message5 && input == 5){
	x.innerHTML = message5;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message6 && input == 6){
	x.innerHTML = message6;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}

function change4l3e(input) {
    var x = document.getElementById("personClass3");
    var y = document.getElementById("hideB3");
    var hideButton = "<button class=\"hideButton\" onclick=\"change4l3e(8)\">Hide</button>";
    var message1 = "<img src=\"4.3.1ex.png\">";
    var message2 = "<img src=\"4.3.2ex.png\">";
    var message3 = "<img src=\"4.3.3ex.png\">";
    var message4 = "<img src=\"4.3.4ex.png\">";
    var message5 = "<img src=\"4.3.5ex.png\">";
    var message6 = "<img src=\"4.3.6ex.png\">";
    var message7 = "<img src=\"4.3.7ex.png\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message4 && input == 4){
	x.innerHTML = message4;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message5 && input == 5){
	x.innerHTML = message5;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message6 && input == 6){
	x.innerHTML = message6;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message7 && input == 7){
	x.innerHTML = message7;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}

function change4l1Exercise(){
    var x = document.getElementById("exer4p1ans");
    if(x.innerHTML == "<img src=\"4.1exerciseAnswer.PNG\">")
	x.innerHTML = "";
    else
	x.innerHTML = "<img src=\"4.1exerciseAnswer.PNG\">";
}

function check4l2Exercise(input){
    var x = document.getElementById("l4Exer2Answer").value;
    var y = document.getElementById("l4Exer2Result");
    if(input == 1)
	y.innerHTML = "<img src=\"4.2exerciseAnswer.PNG\">";
    else if(x == "18\n18\n19" || x == "18\n18\n19\n")
	y.innerHTML = "Correct! <br> <img src=\"smileyFace.PNG\">";
    else
	y.innerHTML = "Incorrect, Try Again! <br> <img src=\"incorrectAnswer.PNG\">";
}


//********** END OF LESSON 4 JS **********

//********** LESSON 5 JS **********


function changeL5P3IntToDoub(input) {
    var x = document.getElementById("5.3intToDoub");
    var y = document.getElementById("hideIntToDoub");
    var hideButton = "<button class=\"hideButton\" onclick=\"changeL5P3IntToDoub(4)\">Hide</button>";
    var message1 = "<img src=\"5.3.4ex.PNG\">";
    var message2 = "<img src=\"5.3.5ex.PNG\">";
    var message3 = "<img src=\"5.3.6ex.PNG\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}

function changeL5P3DoubtoInt(input) {
    var x = document.getElementById("5.3doubToInt");
    var y = document.getElementById("hideDoubtoInt");
    var hideButton = "<button class=\"hideButton\" onclick=\"changeL5P3DoubtoInt(4)\">Hide</button>";
    var message1 = "<img src=\"5.3.1ex.PNG\">";
    var message2 = "<img src=\"5.3.2ex.PNG\">";
    var message3 = "<img src=\"5.3.3ex.PNG\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}


function changeL5P4References(input) {
    var x = document.getElementById("L5P4References");
    var y = document.getElementById("hideL5P4References");
    var hideButton = "<button class=\"hideButton\" onclick=\"changeL5P4References(5)\">Hide</button>";
    var message1 = "<img src=\"5.4.4ex.PNG\">";
    var message2 = "<img src=\"5.4.5ex.PNG\">";
    var message3 = "<img src=\"5.4.6ex.PNG\">";
    var message4 = "<img src=\"5.4.7ex.PNG\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message4 && input == 4){
	x.innerHTML = message4;
	y.innerHTML = hideButton;
    }

    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}

function changeL5P4Primitive(input) {
    var x = document.getElementById("L5P4Primitive");
    var y = document.getElementById("hideL5P4Primitive");
    var hideButton = "<button class=\"hideButton\" onclick=\"changeL5P4Primitive(4)\">Hide</button>";
    var message1 = "<img src=\"5.4.1ex.PNG\">";
    var message2 = "<img src=\"5.4.2ex.PNG\">";
    var message3 = "<img src=\"5.4.3ex.PNG\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}

function change5L1E(input) {
    var x = document.getElementById("5L1EHint");
    var y = document.getElementById("hide5L1E");
    var hideButton = "<button class=\"hideButton\" onclick=\"change5L1E(6)\">Hide</button>";
    var message1 = "<img src=\"5.5.1ex.PNG\">";
    var message2 = "<img src=\"5.5.2ex.PNG\">";
    var message3 = "<img src=\"5.5.3ex.PNG\">";
    var message4 = "<img src=\"5.5.4ex.PNG\">";
    var message5 = "<img src=\"5.5.5ex.PNG\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message4 && input == 4){
	x.innerHTML = message4;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message5 && input == 5){
	x.innerHTML = message5;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}

function check5L1ECheck(input){
    var x = document.getElementById("5L1EAnswerIn").value;
    var y = document.getElementById("L5E1Result");
    if(input == 1)
	y.innerHTML = "<img src=\"5.5exerciseAnswer.png\">";
    else if(x == "15.0\n10.0\n15.0\n10.0\n100.0\n42.0\n" ||
	    x == "15.0\n10.0\n15.0\n10.0\n100.0\n42.0")
	y.innerHTML = "Correct! <br> <img src=\"smileyFace.PNG\">";
    else
	y.innerHTML = "Incorrect, Try Again! <br> <img src=\"incorrectAnswer.PNG\">";
}


//********** END OF LESSON 5 JS **********


//********** LESSON 6 JS **********
function checkL6P1(input){
    var x = document.getElementById("L6P1AnswerIn").value;
    var y = document.getElementById("L6P1Result");
    if(input == 1)
	y.innerHTML = "<p><strong>2</strong></p><br> (5 % 3) is 1 with a remainder of 2";
    else if(x == "2\n" || x == "2")
	y.innerHTML = "Correct! <br> <img src=\"smileyFace.PNG\">";
    else
	y.innerHTML = "Incorrect, Try Again! <br> <img src=\"incorrectAnswer.PNG\">";
}
function checkL6P2(input){
    var x = document.getElementById("L6P2AnswerIn").value;
    var y = document.getElementById("L6P2Result");
    if(input == 1)
	y.innerHTML = "<p><strong>3.0</strong></p><br> (10 % 3.5) is 3 with a remainder of 3";
    else if(x == "3.0" || x == "3.0")
	y.innerHTML = "Correct! <br> <img src=\"smileyFace.PNG\">";
    else
	y.innerHTML = "Incorrect, Try Again! <br> <img src=\"incorrectAnswer.PNG\">";
}
function checkL6P3(input){
    var x = document.getElementById("L6P3AnswerIn").value;
    var y = document.getElementById("L6P3Result");
    if(input == 1)
	y.innerHTML = "<p><strong>2</strong></p><br> (2 % 3) is 0 with a remainder of 2";
    else if(x == "2\n" || x == "2")
	y.innerHTML = "Correct! <br> <img src=\"smileyFace.PNG\">";
    else
	y.innerHTML = "Incorrect, Try Again! <br> <img src=\"incorrectAnswer.PNG\">";
}

function changeL6P2(input) {
    var x = document.getElementById("L6P2Increment");
    var y = document.getElementById("L6P2Hide");
    var hideButton = "<button class=\"hideButton\" onclick=\"changeL6P2(3)\">Hide</button>";
    var message1 = "<img src=\"6.2.5ex.PNG\">";
    var message2 = "<img src=\"6.2.6ex.PNG\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}

function changeL6P3(input) {
    var x = document.getElementById("L6P3Hint");
    var y = document.getElementById("hideL6P3");
    var hideButton = "<button class=\"hideButton\" onclick=\"changeL6P3(4)\">Hide</button>";
    var message1 = "<img src=\"6.3.1ex.PNG\">";
    var message2 = "<img src=\"6.3.2ex.PNG\">";
    var message3 = "<img src=\"6.3.3ex.PNG\">";
    var message4 = "<img src=\"6.3.4ex.PNG\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message4 && input == 4){
	x.innerHTML = message4;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}

function checkL6P4(input){
    var x = document.getElementById("L6P4AnswerIn").value;
    var y = document.getElementById("L6P4Result");
    if(input == 1)
	y.innerHTML = "<img src=\"6.4exerciseAnswer.PNG\">";
    else if(x == "1\n2.0" || x == "1\b2.0\n")
	y.innerHTML = "Correct! <br> <img src=\"smileyFace.PNG\">";
    else
	y.innerHTML = "Incorrect, Try Again! <br> <img src=\"incorrectAnswer.PNG\">";
}

function changeL6P5(input) {
    var x = document.getElementById("L6P5");
    var y = document.getElementById("hideL6P5");
    var hideButton = "<button class=\"hideButton\" onclick=\"changeL6P5(6)\">Hide</button>";
    var message1 = "<img src=\"6.5.1ex.png\">";
    var message2 = "<img src=\"6.5.2ex.png\">";
    var message3 = "<img src=\"6.5.3ex.png\">";
    var message4 = "<img src=\"6.5.4ex.png\">";
    var message5 = "<img src=\"6.5.5ex.png\">";
    if (x.innerHTML != message1 && input == 1){
	x.innerHTML = message1;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message2 && input == 2){
	x.innerHTML = message2;
	y.innerHTML = hideButton;
    }	
    else if(x.innerHTML != message3 && input == 3){
	x.innerHTML = message3;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message4 && input == 4){
	x.innerHTML = message4;
	y.innerHTML = hideButton;
    }
    else if(x.innerHTML != message5 && input == 5){
	x.innerHTML = message5;
	y.innerHTML = hideButton;
    }
    else{
	x.innerHTML = "";
	y.innerHTML = "";
    }    
}

function changeL6E1(){
    var x = document.getElementById("L6P1ans");
    if(x.innerHTML == "<img src=\"6.6.1ExerciseAnswer.PNG\">")
	x.innerHTML = "";
    else
	x.innerHTML = "<img src=\"6.6.1ExerciseAnswer.PNG\">";
}
