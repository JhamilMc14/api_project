const express = require('express'); // Sintaxis de importacion en nodejs
require('dotenv').config();
const { dbConection } = require('./config/db');
const cors = require('cors');


// Crear el servidor express
const app = express();

// configurar cors
app.use(cors());

// Conexion a la DB
dbConection();
// console.log(process.env);


// Rutas API proyecot
app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'Bienvenidos a node'
    });
});

// Para levantar el servidor
app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en el puerto ' + process.env.PORT);
})