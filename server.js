const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
let storedPassword = 'mapasco';

app.use(bodyParser.json());

app.put('/api/cambiar-contrasena', (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (currentPassword !== storedPassword) {
    return res.status(401).json({ success: false, message: 'Contraseña actual incorrecta' });
  }

  storedPassword = newPassword;

  res.status(200).json({ success: true, message: 'Contraseña cambiada con éxito' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
