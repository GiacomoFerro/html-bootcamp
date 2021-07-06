var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber1);
var diceName1 = "dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src","images/"+diceName1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber2);
var diceName2 = "dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src","images/"+diceName2);

if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="draw!";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
