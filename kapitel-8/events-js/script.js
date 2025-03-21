// while (true) {
//     let namn = prompt("Ange ditt namn:"); //popup- ruta att skriva i
//     let lösenord = prompt("Ange ditt lösenord");

//     if (namn == "Alex" && lösenord == "Cioara") {
//         document.writeln("Buna Alex, esti loggat!<br>");
//         break;
//     } else {
//         document.writeln("Gresit, incearca din nou!<br>");
//     }
// }
// let ålder = prompt("hur gammal är du?");
// document.writeln(`Hej ${namn} du är ${ålder}`);

//Läs in ett heltal 5-10
// Skriv ut så många rader som heltalet i webbläsaren, tex

let heltal = parseInt(prompt("Skriv ett heltal 5-10"));
for (let i = 1; i < heltal; i++) {
    document.writeln(`rad ${i}<br>`);
    
}