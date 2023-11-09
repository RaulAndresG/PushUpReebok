
//Express
const express = require('express');
//Mongodb 
const { MongoClient, ObjectId } = require('mongodb');
///
const moment = require('moment');
require('dotenv').config();
///
const router = express.Router();

const bases = process.env.MONGO_URI;
const nombrebase = 'PushUpReebok';


router.get('/GetZapatos', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombrebase);
        const zapatosCollection = db.collection('Zapatos'); 
        const result = await zapatosCollection.find({}).toArray(); 
     res.json({
            msg: "Lista de todos los zapatos en la base de datos.",
            result
        });
        client.close();
    } catch (error) {
        console.log(error, "Error en el endpoint de enpo1.");
    }
});






module.exports = router;