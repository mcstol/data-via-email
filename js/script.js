// function validaSerial(event){
//     numSerial = document.getElementById("numeroSerie").value
//     if(numSerial == 12345){
//         console.log("valido")
//     }
//     else{
//         console.error("errado")
//         alert("Número inválido")
//     }
//     // console.log(numSerial)
// }

function loginSerie(event){
    numSerial = document.getElementById("numeroSerie").value
    passSerie = document.getElementById("botaoSerie").value
    if(passSerie == 09876 & numSerial == 12345){
        console.log("logado")
    }
    else{
        console.error("sem acesso")
        alert("senha errada!")
    }
}