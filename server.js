const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = 3000;
// Use variáveis de ambiente para armazenar informações sensíveis
const MONGO_URL = process.env.MONGO_URL; 

// Middleware para analisar corpos de requisição
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para receber os dados do formulário e salvar no MongoDB
app.post('/submit-order', (req, res) => {
  // Obtendo os dados do formulário a partir do corpo da requisição
  const formData = req.body;

  // Conectando ao banco de dados MongoDB
  MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Erro ao conectar ao MongoDB:', err);
      res.status(500).send('Erro ao processar a ordem de serviço');
      return;
    }

    // Selecionando o banco de dados e a coleção
    const db = client.db('serverdelta'); 
    const collection = db.collection('ordens-de-servico');

    // Inserindo os dados do formulário na coleção
    collection.insertOne(formData, (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados no MongoDB:', err);
        res.status(500).send('Erro ao processar a ordem de serviço');
        return;
      }

      console.log('Ordem de serviço inserida com sucesso:', result.ops[0]);
      res.send('Ordem de serviço recebida com sucesso!');

      // Fechando a conexão com o MongoDB
      client.close();
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
