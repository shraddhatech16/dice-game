var randomNumber1=Math.floor(Math.random()*6)+1;//0 to 0.999
var randomDiceImage="dice"+ randomNumber1 + ".png";
var randomImageSource="images/" + randomDiceImage;
var image1= document.queryselectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;//0 to 0.999
var randomDiceImage1="dice"+ randomNumber2 + ".png";
var randomImageSource1="images/" + randomDiceImage1;
var image2= document.queryselectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="It's A Draw";
}

