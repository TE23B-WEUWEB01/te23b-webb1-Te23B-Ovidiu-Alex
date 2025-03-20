// var dag = "fredag";
// alert(dag);
// console.log("Idag är det " + dag);

// // var är du född?
// var stad = prompt("Var är du född?");
// console.log("Du är född i " + stad);

// // Vi gör en enkel captcha
// var gissning = prompt("Är det ok att fuska på prov?");
// if (gissning == nej) {
//     alert("Du är en människa");
// } else {
//     alert("Du är en robot");
// }

// // // spamcheck med två slumpade tal
// var slumptal1 = Math.round(Math.random() * 100);
// var slumptal2 = Math.round(Math.random() * 100);


// // // Fråga användaren vad är ?? + ??
// var gissning = prompt("Vad är " + slumptal1 + " + " + slumptal2 + "?");
// if (gissning == facit) {
//     document.writeln("<h1>Du är en jigga! 👨🏿</h1>");
// } else {
//     document.writeln("<h1>Du är en invalid! ♿✡️🧑🏿‍🦼‍➡️</h1>");
// }

// document.writeln("<h1>Slumptal1 = " + slumptal1 + "</h1>");

// // Uppgift: skapa en miniräknare 
// // läs in två tal
// // skriv ut valfri matematisk operation: + - / *

// var tal1 = prompt("Ange ett tal1");
// var tal2 = prompt("Ange ett tal2");
// var summa = Number(tal1) + Number(tal2);
// document.writeln("Summa är " + summa);

// Uppgift: skatteuträkning
// Läs in: inkomst, tex 30.000:-
// läs in: skatt, tex 30%
// Skriv ut: "Din inkomst efter skatt är xxx med yy% i skatt."

// var brutto = prompt("Vad är din lön före skatt?");
// var skatt = prompt("Vad är din skatt?");
// var inkomst = Number(brutto) * (100 - (skatt)) / 100;
// document.writeln("Din inkomst efter skatt är " + inkomst + " med " + skatt + "% i skatt.")

// var tal1 = parseInt(prompt("Skriv in ett heltal:"));
// var tal2 = parseInt(prompt("Skriv in ett till heltal:"));

// if (tal1 > tal2) {
//     document.write(tal1 + " är större än " + tal2);
// }
// else if (tal2 > tal1) {
//     document.write(tal2 + " är större än " + tal1);
// }
// else {
//     document.write("Talen är lika stora");
// }


// var grader = parseInt(prompt("Hur många grader är det i vattnet"));

// if (grader > 20 && grader < 35) {
//     document.write("Det ska bli skönt att bada!");
// }
// else {
//     document.write("Jag skippar badet");
// }


// var val = confirm("Klicka på OK eller på Avbryt");

// if (val) {
//     document.write("Du klicka på OK");
// }
// else {
//     document.write("Du klicka på Avbryt");
// }


// var a = 5;
// var b = 3;

// if (a > b) {
//     document.write("A: " + a);
// }
// else if (b > a) {
//     document.write("B: " + b);
// }
// else {
//     document.write("A = B");
// }

var a = 5;
var b = 5;

a > b ? console.log("A: " + a) : console.log("B: " + b);