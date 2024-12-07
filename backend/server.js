const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta para manejar el formulario
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  // Configurar transporte de correo
  const transporter = nodemailer.createTransport({
    service: "gmail", // Puedes usar otro servicio como Outlook
    auth: {
      user: "franciscosequeira879@gmail.com", // Cambia por tu correo
      pass: "Fran290988fss.",       // Cambia por tu contraseña
    },
  });

  // Configurar mensaje
  const mailOptions = {
    from: email,
    to: "franciscosequeira879@gmail.com", // Correo donde recibirás los mensajes
    subject: `Nuevo mensaje de ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Correo enviado exitosamente");
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).send("Error enviando correo");
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
