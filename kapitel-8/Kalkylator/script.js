function plus() {
    let rutaTal1 = document.querySelector("#tal1");
    let rutaTal2 = document.querySelector("#tal2");
    let rutaSvar = document.querySelector("#svar");
}

function plus() {
    rutaSvar.value = Number(rutaTal1.value) + Number(rutaTal2.value);


    if (rutaSvar.value == "999") {
        document.body.style = "visibility: hidden";
    }
}
function minus() {
    
    rutaSvar.value = Number(rutaTal1.value) - Number(rutaTal2.value);
}