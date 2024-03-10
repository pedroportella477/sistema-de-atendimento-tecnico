// Adicione o pacote express-validator para validação de entrada
const { check, validationResult } = require('express-validator');

// Adicione esta linha ao seu endpoint de criação de usuário para validar a entrada
app.post('/users', [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
], async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Seu código existente aqui...

  // Enviar e-mail de boas-vindas após a criação bem-sucedida do usuário
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: 'Bem-vindo ao nosso serviço!',
    text: 'Obrigado por se inscrever em nosso serviço. Estamos ansiosos para atendê-lo.'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});
