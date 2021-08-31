// JavaScript

// Globala variabler
let inputElem;
let msgElem;
let fruitNames;
let fruitNr;
let selFruitsElem;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
	inputElem=[];
    inputElem[1]=document.getElementById("input1");
    inputElem[2]=document.getElementById("input2");
    inputElem[3]=document.getElementById("input3");

    msgElem = document.getElementById("message");
    selFruitsElem = document.getElementById("selectedFruits")
    document.getElementById("btn1").onclick = showFruit;
    document.getElementById("btn2").onclick = checkName;
    document.getElementById("btn3").onclick = addFruits;

    fruitNames = ["ingen frukt", "äpple", "banan", "citron", "apelsin", "päron"]
    fruitNr = 0;

} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

// Funktion som avgör vilken bild som ska visas
function showFruit() {
    let nr = getNr(1,5);
    let fruitUrl;

    if(nr === null){
        console.info("inte korrekt");
        return;
    }

    fruitUrl = document.getElementById("fruitImg");

    //beroende på vilket nr det är så skrivs en annan bild ut
    if(nr == 1){
        fruitUrl.src = "./pics/fruit1.jpg";
    }
    else if(nr == 2) {
        fruitUrl.src = "./pics/fruit2.jpg";
    }
    else if(nr == 3){
        fruitUrl.src = "./pics/fruit3.jpg";
    }
    else if(nr == 4) {
        fruitUrl.src = "./pics/fruit4.jpg";
    }
    else if(nr == 5) {
        fruitUrl.src = "./pics/fruit5.jpg"; 
    }
    fruitNr = nr;
}


function checkName() {
    let name;

    if(fruitNr == 0){
        msgElem.innerHTML = "Du måste välja frukt";
        return;
    }

    name = String(inputElem[2].value);

    if(name == fruitNames[fruitNr]){
        msgElem.innerHTML = "Rätt namn";
    }
    else{
        msgElem.innerHTML = "Fel namn";
    }
}

function getNr(elemNr, high){
    let nr;

    nr = inputElem[elemNr];
    nr = Number(inputElem[elemNr].value)

    nr = parseInt(nr);
    inputElem[elemNr].value = nr;

    if(isNaN(nr)){
        msgElem.innerHTML = "Skriv ett nummer";
        return null;
    }

    if(nr < 1 || nr > high){
        msgElem.innerHTML = "Skriv ett nummer mellan 1 och 5";
        return null;
    }
    return nr;
}

function addFruits(){
    let amount = getNr(3,9);
    let imgList;

    imgList = "";
    for(i = 0;i < amount;i++){
        imgList += "<img src ='./pics/fruit" + fruitNr + ".jpg' alt = 'frukt'>";    
    }

    if(amount == null){
        msgElem.innerHTML = "Ingen frukt är vald";
        return;
    }
    selFruitsElem.innerHTML = imgList;
}



