const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const routerbase = require('./routes/enpos.routes.js');

app.use(cors()); // Agrega el middleware de CORS aquí

app.use('/get', routerbase);

const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
    console.log(`El servidor está en línea en el puerto: ${port}.`);
});
