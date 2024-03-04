<?php
session_start();
include 'db_config.php';

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $_SESSION['username'] = $username;
    header('Location: admin.php');
} else {
    echo "Credenciais inválidas. <a href='login.php'>Tente novamente</a>";
}
?>
