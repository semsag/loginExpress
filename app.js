const express = require('express')
const app = express()
const port = 3000
// Get the client
const cors = require('cors')
const session = require('express-session')
const md5 = require('md5');
const bcrypt = require('bcrypt');
const login = require('./login');
const { registro } = require('./registro');
const { obtenerUsuarios, eliminarUsuario } = require('./usuarios');
const validar = require('./validar');
const saltRounds = 10;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(session({
  secret: "12345asdfghjklñ",
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', login)

app.get('/validar', validar)

app.get('/registro', registro)

app.get('/usuarios', obtenerUsuarios)

app.delete('/usuarios', eliminarUsuario)

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});