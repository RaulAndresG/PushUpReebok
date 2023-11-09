import { Schema, model } from "mongoose";

const ClienteSchema = Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  email: { type: String, required: true },
});

const Clientes = model('Clientes', ClienteSchema, 'Clientes');

export default Clientes;
