// JavaScript Document
////////////////////////////////////////////////////////////////////INTRO//////////////////////////////////////////////////////

<!------SEITENWECHSEL SCRIPT---->
    function show(shown, hidden) {
      document.getElementById(shown).style.display='block';
      document.getElementById(hidden).style.display='none';
      return false;
    }
<!-------------------------------INTRO-------------------------------> 
var Intro = document.getElementById("Intro");
var Spiel = document.getElementById("Spiel");

function IntroTimer() {
		Spiel.style.display = "block";
		Intro.style.display = "none";
		FUßBALLRUNDE();
    }	

//////////////////////////////////////////////////////////////////SPIEL//////////////////////////////////////////////////////////////////////////
	
<!------------------------------Variablen----------------------------------> 	
var HasenScore = 0;
var MausScore = 0;
var BallPosition = 3;
var Torgeschossen = true;
var geradeschiesst ="keiner";

var PfiffSound = new Audio('Assets/Pfiff.mp3');
var TorSound = new Audio('Assets/Tor.mp3');

var HasenPunkte = document.getElementById("Hasenscore");
var MausPunkte = document.getElementById("Mausscore");

var SchiriSprite = document.getElementById("SpielSchiriSprite");
var Schiri = document.getElementById("SpielSchiri");	

var AufgabenArray = ["Wie macht die Kuh?", "Wie macht die Katze?", "Warum ist die Banane krummm?", "Wie heißt der Kaiser von Pisa?", "Warum ging das Huhn über die Straße?", "Warum liegt hier eigentlich Stroh rum?", "4+4"];
var Aufgabe = "";
var Aufgabenfeld  = document.getElementById("Aufgabenfeld");
var AufgabeDiv = document.getElementById("Aufgabe");

var HasenArray = ["Laura", "Ralph", "Martin", "Rufus", "Anna", "Klausi", "Lotty"];
var MausArray = ["Jan", "Dieter", "Simone", "Angie", "Nicole", "Christian", "Armin"];
var HaseSchueler = "";
var MausSchueler = "";
var HaseNamensfeld = document.getElementById("HaseNamensfeld");
var MausNamensfeld = document.getElementById("MausNamensfeld");
var HaseNameAni = document.getElementById("SpielerNameHase");
var MausNameAni = document.getElementById("SpielerNameMaus");

var HaseSpieler = document.getElementById("SpielerHase");
var MausSpieler = document.getElementById("SpielerMaus");
var HaseSprite = document.getElementById("SpielerHaseSprite");
var MausSprite = document.getElementById("SpielerMausSprite");

var FeldHase1 = document.getElementById("FeldHase1");
var FeldHase2 = document.getElementById("FeldHase2");
var TorHase = document.getElementById("TorHase");
var FeldMaus1 = document.getElementById("FeldMaus1");
var FeldMaus2 = document.getElementById("FeldMaus2");
var TorMaus = document.getElementById("TorMaus");

var Ball = document.getElementById("SpielBall");
var TorAni = document.getElementById("Tooor");



function FUßBALLRUNDE() {
Anpfiff();
Namensetzen();
Einfliegen();
Tastenabfrage();
Punktesetzen();			
	
<!---------------------------------------Punkte-----------------> /////////////////////FUNZT!!!!!
function Punktesetzen(){
console.log (Hasenscore, MausScore);
HasenPunkte.textContent = HasenScore;
MausPunkte.textContent = MausScore;	
}
<!--------------------------------------------------Schiri--------> //////////////// Blendet bei Neustart nicht ein D:
function Anpfiff(){
Schiri.style.display = "block";
SchiriSprite.style.display = "block";
Schiri.style.animation = "SchiriAnpfiff 1s ease-in 5s 1 forwards";
SchiriSprite.style.animation = "SchiriSprite 5s steps(9) 1 forwards";
Torgeschossen = false;
SchiriSprite.addEventListener("animationend", Aufgabesetzen);
}
<!-----------------------------------------------Aufgabe------------------------> ////////////////// Blendet bei Neustart nicht ein D: 
function Aufgabesetzen(){
PfiffSound.play();
Aufgabe = AufgabenArray[Math.floor(Math.random()*AufgabenArray.length)];
Aufgabenfeld.textContent = Aufgabe;
AufgabeDiv.style.display = "block";
AufgabeDiv.style.animation = "AufgabeEinblenden 3s linear 1 forwards"
}
<!--------------------------------------------------SpielerNamen------------------->////////////////// FUNZT!!
function Namensetzen() {

HaseSchueler = HasenArray[Math.floor(Math.random()*HasenArray.length)];
MausSchueler = MausArray[Math.floor(Math.random()*MausArray.length)];

HaseNamensfeld.textContent = HaseSchueler;
HaseNamensfeld.style.display = "block";
HaseNameAni.style.display = "block";
HaseNameAni.style.animation = "SpielerNameHaseEinflug 0.5s linear 9.5s 1 forwards";	
MausNamensfeld.textContent = MausSchueler;
MausNamensfeld.style.display = "block";
MausNameAni.style.display = "block";
MausNameAni.style.animation = "SpielerNameMausEinflug 0.5s linear 9.5s 1 forwards";
}
<!------------------------------------------VG Spieler----------------------------------->/////////////////FUNZT!!!
function Einfliegen() {
<!------Spieler VG - Hase ------>
HaseSpieler.style.display = "block";
HaseSprite.style.display = "block";
HaseSprite.style.animation = "HaseSpriteIdle 2s steps(4) infinite forwards";
HaseSpieler.style.animation = "SpielerHaseEinflug 1s ease-in 9s 1 forwards";
<!------Spieler VG - Maus ------>
MausSpieler.style.display = "block";
MausSprite.style.display = "block";
MausSprite.style.animation = "MausSpriteIdle 2s steps(4) infinite forwards";
MausSpieler.style.animation = "SpielerMausEinflug 1s ease-in 9s 1 forwards";	
}

function Ausfliegen () {
	HaseSpieler.style.animation = "SpielerHaseAusflug 1s ease-in 1 forwards"; 
	MausSpieler.style.animation = "SpielerMausAusflug 1s ease-in 1 forwards"; 
	HaseNameAni.style.animation = "SpielerNameHaseAusflug 1s ease-in 1 forwards"; 
	MausNameAni.style.animation = "SpielerNameMausAusflug 1s ease-in 1 forwards"; 	
}


<!------------------------------------------TASTENABFRAGE--------------------------------> ////////////////// FUNZT!!
function Tastenabfrage() { 
MausSpieler.addEventListener("animationend", Ausflug);
		function Ausflug() {
			MausSpieler.removeEventListener("animationend", Ausflug);
			document.addEventListener("keydown", Taste);
					};//Ende Keydown
function Taste() {
		console.log (BallPosition);
		document.removeEventListener("keydown", Taste);
		
if 		(event.keyCode === 37) { //Pfeil Links -----> Hase Schuss
		HaseSprite.style.animation = "HaseSpriteSchuss 1s steps(5) 1 forwards";
		HaseSprite.addEventListener("animationend", Feldkick);
		geradeschiesst ="Hase";
		} //Ende HaseSchuss
else if (event.keyCode === 39) { //Pfeil Rechts -----> Maus Schuss
		MausSprite.style.animation = "MausSpriteSchuss 1s steps(4) 1 forwards";
		MausSprite.addEventListener("animationend", Feldkick);	
		geradeschiesst ="Maus";
		} // Ende MausSchuss
					} //Ende Taste	
} //Ende Tastenabfrage

<!------------------------------------------FELDSPIELER-------------------------------------> ////////////////// FUNZT!!

function Feldkick () {
HaseSprite.removeEventListener("animationend", Feldkick);
MausSprite.removeEventListener("animationend", Feldkick);		
Ausfliegen();

if (BallPosition == 1) { 	  //Hase2 schießt
FeldHase2.style.animation = "FeldSpielerSchuss 1s steps(4) 1 forwards";
FeldHase2.addEventListener("animationend", function() {
FeldHase2.style.animation = "FeldSpielerIdle 2s steps(4) infinite forwards";});
}
else if (BallPosition == 2) { //Hase1 schießt
FeldHase1.style.animation = "FeldSpielerSchuss 1s steps(4) 1 forwards";
FeldHase1.addEventListener("animationend", function() {
FeldHase1.style.animation = "FeldSpielerIdle 2s steps(4) infinite forwards";});
}
else if (BallPosition == 3) { //Mitte
}
else if (BallPosition == 4) {//Maus1 schießt
FeldMaus1.style.animation = "FeldSpielerSchuss 1s steps(4) 1 forwards";
FeldMaus1.addEventListener("animationend", function() {
FeldMaus1.style.animation = "FeldSpielerIdle 2s steps(4) infinite forwards";});
}
else if (BallPosition == 5) {//Maus2 schießt
FeldMaus2.style.animation = "FeldSpielerSchuss 1s steps(4) 1 forwards";
FeldMaus2.addEventListener("animationend", function() {
FeldMaus2.style.animation = "FeldSpielerIdle 2s steps(4) infinite forwards";});
}
setTimeout(Ballflug, 1000); 
} //Ende Feldspielerkick

<!-------------------------------------------------------BALLFLUG----------------------------> ////////// FUNZT!! /Bzw. Ball zurück zur Mitte über CSS-Notbehelf

function Ballflug(){
	if (geradeschiesst == "Hase"){
		if (BallPosition == 1) { 	  //Hase2 schießt
			Ball.style.animation = "FeldHase2-TorHase 1s ease-in-out 1 forwards";
			setTimeout(Tor, 200); 
								}
		else if (BallPosition == 2) { //Hase1 schießt
			Ball.style.animation = "FeldHase1-FeldHase2 1s ease-in-out 1 forwards";
								}
		else if (BallPosition == 3) { //Mitte
		Ball.style.animation = "Mitte-FeldHase1 1s ease-in-out 1 forwards";		
								}
		else if (BallPosition == 4) {//Maus1 schießt
		Ball.style.animation = "FeldMaus1-Mitte 1s ease-in-out 1 forwards";
		naechste ();
								}
		else if (BallPosition == 5) {//Maus2 schießt
		Ball.style.animation = "FeldMaus2-FeldMaus1 1s ease-in-out 1 forwards";	
		}										
	BallPosition -=1;							
	}//Ende Hase
	else if (geradeschiesst == "Maus"){	
		if (BallPosition == 1) {//Hase2 schießt
		Ball.style.animation = "FeldHase2-FeldHase1 1s ease-in-out 1 forwards";
		}
		else if (BallPosition == 2) { //Hase1 schießt
		Ball.style.animation = "FeldHase1-Mitte 1s ease-in-out 1 forwards";
		}
		else if (BallPosition == 3) { //Mitte
		Ball.style.animation = "Mitte-FeldMaus1 1s ease-in-out 1 forwards";
		}
		else if (BallPosition == 4) {//Maus1 schießt
		Ball.style.animation = "FeldMaus1-FeldMaus2 1s ease-in-out 1 forwards";
		}
		else if (BallPosition == 5) {//Maus2 schießt
		Ball.style.animation = "FeldMaus2-TorMaus 1s ease-in-out 1 forwards";
		setTimeout(Tor, 200); 
		}	
	BallPosition +=1;
	}//Ende Maus
	naechste ();	
	}//Ende Ballflug


<!-----------------------------------------------------Tor-------------------------------------------->////////////////// FUNZT!!
function Tor (){
	if (geradeschiesst == "Hase"){
	TorMaus.style.animation = "TorwartSprung 1s steps(5) 1 forwards";
	HasenScore +=1;
	TorMaus.addEventListener("animationend", Torani); //Torani	
	}//Ende HaseTor
	else if (geradeschiesst == "Maus"){
	TorHase.style.animation = "TorwartSprung 1s steps(5) 1 forwards";
	MausScore +=1;
	TorHase.addEventListener("animationend", Torani); //Torani	
	}//Ende HaseTor
	
function Torani (){
	TorSound.play();
	TorMaus.style.animation = "FeldSpielerIdle 2s steps(4) infinite forwards";
	TorHase.style.animation = "FeldSpielerIdle 2s steps(4) infinite forwards";
	TorAni.style.display = "block";
	TorAni.style.animation = "Tor 4s ease-in 1 forwards";	
	Torgeschossen = true;
	BallPosition = 3;
	Punktesetzen();
	}//Ende TorAni
} //Ende Tor
	



<!-----------------------------------------------nächste Runde--------------------------------------------------->		
	


function naechste (){
Schiri.style.animation = "bla  1s linear 1 forwards";
SchiriSprite.style.animation = "bla  1s linear 1 forwards";	
TorAni.style.animation = "bla 1s linear 1 forwards";
AufgabeDiv.style.animation = "bla 1s linear 1 forwards";
	
Schiri.style.display = "none";
SchiriSprite.style.display = "none";
TorAni.style.display = "none";
AufgabeDiv.style.display = "none";

FUßBALLRUNDE();
}	
} //Ende FußballRunde





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<!---------------SIEEEEG -------------------------->

var Mausparty = document.getElementById("TeamMaus");
var Hasenparty = document.getElementById("TeamHase");

function PunkteStand() {
if (HasenScore > MausScore) {
	Mausparty.style.display = "none";
}
else if (MausScore > HasenScore){
	Hasenparty.style.display = "none";
}
else {
	Hasenparty.style.display = "none";
	Mausparty.style.display = "none";
}; 
						}