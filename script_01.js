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
// {
//     // what happens in VEGAS ...
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

ausgabeNamenParams("Ozan" , "Özyurt"); 
ausgabeNamenParams("Levi" , "Horak");
ausgabeNamenParams("Mona" , "Horak");
function ausgabeNamenParams(firstName , familyName) {
    console.log("Hallo "+ firstName + " " + familyName + "!");
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