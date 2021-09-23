const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        // Debemos utilizatr la cadena de conexión que tenemos en mongocompas
        await mongoose.connect(process.env.DB_CNN);
        console.log('Conexion exitosa a la BD')

    } catch (error) {
        console.log(error);
        throw new Error('error al conectar a la bd')
    }
}
module.exports = {
    dbConection
}