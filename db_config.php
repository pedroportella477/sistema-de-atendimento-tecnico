<?php
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "casa_de_davi_radio";

// Criando conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
