<?php

$servername = "localhost";
$username = "matuto"; 
$password = "faculweb24"; 
$dbname = "restaurante_matuto";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo "Erro de conexão: " . $conn->connect_error; 
    exit(); 
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];

  
    $sql = "INSERT INTO cadastros (nome, email, telefone) VALUES ('$nome', '$email', '$telefone')";

  
    if ($conn->query($sql) === TRUE) {
        echo "sucesso"; 
    } else {
        echo "Erro ao cadastrar: " . $conn->error; 
    }
} else {
    echo "Erro: Nenhum dado enviado!"; 
}

$conn->close();
?>
