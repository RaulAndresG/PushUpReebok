import Clientes from "../models/Clientes.js";
import { response } from "express";
import generateJWT from "../helpers/generateJWT.js";
import bcryptjs from "bcryptjs";

const login = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const cliente = await Clientes.findOne({ email });
    if (!cliente) return res.status(400).json({ message: "Cliente incorrecto" });
    const validPassword = bcryptjs.compareSync(password, cliente.password);
    if (!validPassword) return res.status(400).json({ message: "Contraseña incorrecta" });
    const token = await generateJWT(cliente._id);
    res.cookie("token", token); 
    res.json({ cliente, token }); 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

export default login;
