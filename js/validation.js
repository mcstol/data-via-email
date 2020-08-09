function emailValidation(event){
    digitEmail = $("#emailvalido").val()
    console.log(digitEmail)
    if (digitEmail == "teste@email.com"){
        console.log("e-mail valido")
    }
    else{
        alert("email incorreto")
    }
}
function passwordValidation(event){
    caixaTermo = document.getElementById("caixa").checked
    digitPassword = $("#senha").val()
    if (digitPassword == "12345"&caixaTermo == true){
        console.log("chamou outra pagina")
        location.replace("/DashBoard.html");

    }
    else{
        alert("Senha incorreta ou marque a caixa de termo!")
    }

}