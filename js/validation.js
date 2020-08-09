function emailValidation(event){
    digitEmail = getElementById("email").value
    if (digitEmail == "teste@email.com"){
        console.log("e-mail valido")
    }
    else{
        alert("email incorreto")
    }
}
function passwordValidation(event){
    digitPassword = document.getElementById("senha").value
    if (digitPassword == "12345"){
        console.log("chamou outra pagina")
        location.replace("/DashBoard.html");

    }
    else{
        alert("Senha incorreta!")
    }
}