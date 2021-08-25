// JavaScript

// Globala variabler
let inputElem;
let msgElem;

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
function showFruit(a) {
    let nr;
    let fruitUrl;

    nr = Number(inputElem[1].value);
    fruitUrl = document.getElementById("fruitImg");
    
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
    if(isNaN(nr)){
        msgElem.innerHTML = "Skriv ett nummer";
    }
}