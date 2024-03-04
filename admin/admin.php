<?php
// Página admin.php

// Verificar se o usuário está autenticado
session_start();
if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

// Aqui você pode incluir código PHP para conectar ao banco de dados e recuperar informações, como notícias, pedidos de música, anúncios, etc.
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Área Administrativa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="admin-container">
        <h2>Bem-vindo, <?php echo $_SESSION['username']; ?></h2>
        
        <!-- Opções de gerenciamento de conteúdo -->
        <h3>Notícias</h3>
        <!-- Formulário para adicionar notícias -->
        <form action="adicionar_noticia.php" method="post">
            <input type="text" name="titulo" placeholder="Título da Notícia" required>
            <textarea name="conteudo" placeholder="Conteúdo da Notícia" required></textarea>
            <button type="submit">Adicionar Notícia</button>
        </form>

        <h3>Pedidos de Música</h3>
        <!-- Tabela para exibir pedidos de música -->
        <table>
            <thead>
                <tr>
                    <th>Música</th>
                    <th>Artista</th>
                    <th>Usuário</th>
                </tr>
            </thead>
            <tbody>
                <!-- Aqui você pode inserir dinamicamente os pedidos de música -->
                <tr>
                    <td>Nome da Música</td>
                    <td>Nome do Artista</td>
                    <td>Nome do Usuário</td>
                </tr>
            </tbody>
        </table>

        <h3>Anúncios</h3>
        <!-- Formulário para gerenciar anúncios -->
        <form action="gerenciar_anuncios.php" method="post">
            <!-- Campos para adicionar, editar ou excluir anúncios -->
        </form>

        <a href="logout.php">Logout</a>
    </div>
</body>
</html>
