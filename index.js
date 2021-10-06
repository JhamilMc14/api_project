const express = require('express'); // Sintaxis de importacion en nodejs
require('dotenv').config();
const { dbConection } = require('./config/db');
const cors = require('cors');


// Crear el servidor express
const app = express();

// configurar cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json());


// Conexion a la DB
dbConection();

// console.log(process.env);


// Rutas API proyecot;
app.use('/api/usuarios', require('./routes/usuarios.route'));
app.use('/api/login', require('./routes/auth.route'));
// app.use('/api/investigadores', require('./routes/investigadores.route'));


// Para levantar el servidor
app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en el puerto ' + process.env.PORT);
})