function validarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Validação de Dados

    if (nome.trim() === "") {
        alert("O campo nome é obrigatório!");
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === "" || !emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido!");
        return;
    }

    if (telefone.trim() !== "" && telefone.length < 10) {
        alert("Por favor, insira um número de telefone válido!");
        return;
    }

    document.querySelector("form").submit();
}



document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "cadastro.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    var data = "nome=" + nome + "&email=" + email + "&telefone=" + telefone;

    xhr.send(data);

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("message").style.display = "block"; 
            document.getElementById("msgContent").innerText = "Cadastro realizado com sucesso!"; 
        } else {
            document.getElementById("message").style.display = "block";
            document.getElementById("msgContent").innerText = "Ocorreu um erro";
        }
    };
});
