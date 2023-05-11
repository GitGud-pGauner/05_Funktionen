"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

//Funktionsaufruf
// test();
//Funktionsrumpf (body) | callee
//Funktionsdeklaration
// function test()
// {
//     console.log("hey");    
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Funktionsaufruf -> body
// ausgabeNamen();
// function ausgabeNamen() 
// {
//     console.log("Hulu");
//     console.log("Halär");
//     console.log("Ahoi");
// }
// ausgabeNamen();
// function ausgabeNamen() 
// { // what happens in VEGAS ...
//    let firstName = "Karsten"; 
//    console.log("Hallo " + firstName + "!")
// } 
// console.log(firstName); //FEHLER: SCOPE!

// ausgabeNamenParam("Ozan"); // call + Argumente
// ausgabeNamenParam("Levi");
// ausgabeNamenParam("Mona");
// Argument (Daten für Parameter)
function ausgabeNamenParam(firstName) {
    console.log("Hallo "+ firstName + "!");
}
/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Ozan" , "Özyurt"); 
// ausgabeNamenParams("Gudrun" , "Grundig");
// ausgabeNamenParams("Max" , "Mueller");
// function ausgabeNamenParams(firstName , familyName) {
//     console.log("Hallo "+ firstName + " " + familyName + "!");
// }
 
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));
// function ausgabeNamenParams(firstName , familyName) {
//     console.log("Hallo "+ firstName + " " + familyName + "!");
// }

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2("Ozan","Özyurt")

function ausgabeNamenParams2(firstName , familyName) {
   
// 1. Funktionalität: string composing
const GAP = " ";
let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
// 2. Funktionalität: string output
    console.log(outputStr);
}

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten in Funktionen| return

getString("Maxine","Mützerich");

output(getString("Maxine","Mützerich"));
function getString(firstName , familyName) {
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    return outputStr; /// return sendet Daten an den call zurück
    console.log(outputStr);  // "return" bricht die Funktion ab (ähnlich wie "break;")
}


/*** INPUT --> Parameter | return --> OUTPUT ***/

//Funktionalität: string output//
// output("Hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}



















// function ausgabeNamen(namen) 
// {
//     for (let i = 0; i < namen.length; i++) 
//     {
//       console.log(namen[i]);
//     }
//   }
  
//   // Beispielaufruf der Funktion mit einem Array von Namen
//   const namenArray = ["Hulu", "Halär", "Ahoi"];
//   ausgabeNamen(namenArray);