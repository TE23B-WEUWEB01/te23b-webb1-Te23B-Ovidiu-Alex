function DarkPage() {
    document.writeln('Hej');
    document.writeln('Cioara');

    document.body.style = "background: #000; color: #FFF;"
    document.querySelector("h1").style = "font-size: 100px"
}

function WhitePage() {
    document.body.style = "background: #FFF; color: #000;"
}

function KonstigRubrik() {
    document.querySelector("h1").style = "font-size: 100px; text-transform:lowercase;text-shadow: 5px 5px 5px yellowgreen;bakground: khaki;";
}

function VisaLåt() {
    document.querySelector("p").style = "visibility: visible";
}

function Dölj() {
    document.querySelector("p").style = "visibility: hidden";
}