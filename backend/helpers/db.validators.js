import Clientes from "../models/Clientes.js";

const existEmailLogin = async (email) => {
  const emailExists = await Clientes.findOne({ email });
  if (!emailExists) {
    return false; 
  }
  return true; 
};

export { existEmailLogin };
