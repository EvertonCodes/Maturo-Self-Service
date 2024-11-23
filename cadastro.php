<?php

$dbfile = "restaurante_matuto.db"; 

$conn = new PDO("sqlite:" . $dbfile);

$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];

    
    $sql = "INSERT INTO cadastros (nome, email, telefone) VALUES (:nome, :email, :telefone)";
    
    
    $stmt = $conn->prepare($sql);

    
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':telefone', $telefone);

    
    try {
        $stmt->execute();
        echo "Sucesso ao cadastrar!"; 
    } catch (PDOException $e) {
        echo "Erro ao cadastrar: " . $e->getMessage(); 
    }
} else {
    echo "Erro: Nenhum dado enviado!"; 
}

$conn = null;
?>
