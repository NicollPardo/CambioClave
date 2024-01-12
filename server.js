const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.put('https://ptesa-env-more.eastus.cloudapp.azure.com/k2o/dev/api/api/Usuario/CambiarClave', (req, res) => {
  res.status(200).json({ message: 'Contraseña cambiada con éxito' });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
