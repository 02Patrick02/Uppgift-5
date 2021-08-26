// JavaScript

// Globala variabler
let inputElem;
let msgElem;
let fruitNames;
let fruitNr;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
	inputElem=[];
    inputElem[1]=document.getElementById("input1");
    inputElem[2]=document.getElementById("input2");
    inputElem[3]=document.getElementById("input3");

    msgElem=document.getElementById("message");
    document.getElementById("btn1").onclick = showFruit;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

// Funktion som avgör vilken bild som ska visas
function showFruit() {
    let nr;
    let fruitUrl;

    nr = Number(inputElem[1].value);
    fruitUrl = document.getElementById("fruitImg");
    
    //kollar om det är ett nummer eller inte
    if(isNaN(nr)){
        msgElem.innerHTML = "Skriv ett nummer";
    }

    //kollar om nummret som är inskrivet är mellan 1 och 5
    if(nr < 1 || nr > 5){
        msgElem.innerHTML = "Skriv ett nummer mellan 1 och 5";
    }

    //konverterar decimaltal till heltal
    nr = parseInt(nr);
    inputElem[1].value = nr;

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

}