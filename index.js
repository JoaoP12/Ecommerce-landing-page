function storeEmail () {
    var value = document.getElementById('email_field').value;
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)){
        alert("Insira um endereço de e-mail válido!");
    }
    else {
        localStorage.setItem("email", value);
        alert("Email registrado com sucesso!")
    }
}