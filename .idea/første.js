
const ou = function(str) {console.log(str);};
const out = function(...str) {console.log(str);};

ou("Jens Lort");
out("Jens Lort"); // så står der egentlig: console.log("Hello world");
out(3,4);

alert("Jens Peter"); // dette laver en popup - man bruger den til at teste!

let demo = document.getElementById("demo"); // her refererer vi til det p-tag som har id'et "demo"
ou(demo);
 // man kan sætte den innerHTML til en string


/*
index + item
Hvis jeg giver den en funktion med 2 param - så tager den både indholdet (item) og index ()
*/
function myFunction2(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}

function myFunction1(item) {
  document.getElementById("demo").innerHTML += item + "<br>";
}

// HAAAY


// vi laver et array, som vi vil skrive ud via en function
let fruits = ["apple", "banana", "orange"]; // ofte bruger man apostroffer og ikke gåseøjne når man angiver tekst i js - men han bruger gåseøjne -

alert(fruits);

// dem som har lavet forEach == hvis de får en funktion med én param, så tager den indholdet af array'et
// hvis de får en funktion ind med to param, så tager den både indholdet OG index
// den første param er selve værdien/item og den næste param er itemets index
fruits.forEach(myFunction1);



// vi får fat i body'en på html'en:
let bdy = document.querySelector('body');
ou(bdy);

ou("bdy=" + bdy.style.backgroundColor);
bdy.style.backgroundColor = "pink";
ou("bdy= " + bdy.style.backgroundColor);


let inp = document.querySelector(".getColor");
ou(inp);
// == så propper vi det her ind i inp-objektet
inp.value = "yellow";
// vi spørger hvad der er blevet proppet ind i det her input-felt:
let pbCol = document.querySelector(".pbCheck");
ou(pbCol);


/*
// vi laver en metode som sætter baggrundsfarven
// det er en eventhandler - dvs. når nogen trykker på knappen - så sker denne metode (tror jeg!)
function setBodyColor(event){
  let col = inp.value;
  bdy.style.backgroundColor = col;
  ou(event);
}

// nu knytter vi denne metode til vores knap:
// dette er sådan vi gør det i java - vi skriver et lambda-udtryk
pbCol.addEventListener('click', event => setBodyColor(btn));

 */

// nu vil vi gøre det der står ovenfor på js-måden

function setBodyColor(){
  let col = inp.value;
  bdy.style.backgroundColor = col;
}

// nu knytter vi denne metode til vores knap:
// dette er sådan vi gør det i java - vi skriver et lambda-udtryk
// vi kalder funktionen
pbCol.addEventListener('click', setBodyColor);

/*
document == hele html-siden - det er den yderste rod af DOM-træ
det man ser i consolen i f12 i browseren er DOM-træet - det er hele html'en
DOM-træet =
<head>
<body> det øverste panel for hele hjemmesiden
inde i det panel har vi nogle ting - vi har h1 og en button osv.
<footer>
I js kan man få fat i alle disse elementer og manipulere med dem
 */

ou(document)

/*
Det som vi kan bruge document til == vi kan komme en eventhandler på som fx fanger at vi trykker på esc-tast
vi laver først funktionen til det:
 */
let w = 30;

function testEscapePressed(e) {
  ou(e);

  // hvis key'en er Escape
  if(e.key === "Escape"){
    // elementet har en style - vi kan bruge width proportien til at sætte bredde -
    // I css ville det så sådan ud: width: 30px; - derfor siger vi at vi caster et tal til en String og så + px:
    // Så kommer der til at stå 30px:


    pbCol.style.width = String(w) + "px"; // vi caster den til en String
    w++;
  }
}

// vi skriver som første param hvilken type vi vil lytte på - vores er altså en key
document.addEventListener('keydown', e => testEscapePressed(e));









