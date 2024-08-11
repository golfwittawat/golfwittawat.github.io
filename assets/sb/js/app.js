const btn1 = document.getElementById("btn1");
const nteamA = document.querySelector(".btn1");

btn1.addEventListener("click", function () {

  const nameAInput = prompt("กรุณากรอกชื่อ :")
 
  nteamA.textContent = nameAInput;
});

const btn2 = document.getElementById("btn2");
const nteamB = document.querySelector(".btn2");

btn2.addEventListener("click", function () {

  const nameBInput = prompt("กรุณากรอกชื่อ :")
 
  nteamB.textContent = nameBInput;
});

function addone1() {
    var Score = document.getElementById("roundCorners").innerHTML;
    
    if (Score++ < 9) {
      score = "0" + Score
    }
    else {
      score = Score++;
    }

    document.getElementById("roundCorners").innerHTML = score;
  }

function subone1() {

    var Score = document.getElementById("roundCorners").innerHTML;
    var scorenew = 0;
    if (Score-- <= 10) {
      score = "0" + Score
    }
    else {
      score = Score--;
    }
    if(Score < 0){
      score = "0" + scorenew
    }
    document.getElementById("roundCorners").innerHTML = score;
  }

function addone2() {
    var Score = document.getElementById("roundCorners2").innerHTML;
    if (Score++ < 9) {
      score = "0" + Score
    }
    else {
      score = Score++;
    }
    document.getElementById("roundCorners2").innerHTML = score;
  }

function subone2() {

    var Score = document.getElementById("roundCorners2").innerHTML;
    var scorenew = 0;
    if (Score-- <= 10) {
      score = "0" + Score
    }
    else {
      score = Score--;
    }
    if(Score < 0){
      score = "0" + scorenew
    }
    document.getElementById("roundCorners2").innerHTML = score;
  }

function addone3() {
    var Score = document.getElementById("set").innerHTML;
    if (Score++ < 9) {
      score = "0" + Score
    }
    else {
      score = Score++;
    }
    document.getElementById("set").innerHTML = score;
  }

function subone3() {

    var Score = document.getElementById("set").innerHTML;
    var scorenew = 0;
    if (Score-- <= 10) {
      score = "0" + Score
    }
    else {
      score = Score--;
    }
    if(Score < 0){
      score = "0" + scorenew
    }
    document.getElementById("set").innerHTML = score;
  }

function refreshPage() {
    window.location.reload();
  } 

