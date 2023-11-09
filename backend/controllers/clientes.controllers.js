import Clientes from "../models/Clientes.js";

const getClientes = async (req, res) => {
  const { desde, hasta } = req.query;
  const query = { estado: true };
  const [total, clientes] = await Promise.all([
    Clientes.countDocuments(query),
    Clientes.find(query).skip(Number(desde)).limit(Number(hasta)),
  ]);
  res.json({ total, clientes });
};

const postCliente = async (req, res) => {
  try {
    const newCliente = new Clientes(req.body);
    await newCliente.save();
    res.json(newCliente);
  } catch (error) {
    res.status(500).json({ message: "Error al crear un nuevo cliente", error: error.message });
  }
};

const deleteCliente = async (req, res) => {
  const { id } = req.params;
  await Clientes.findByIdAndDelete(id);
  res.json("Cliente eliminado");
};

const putCliente = async (req, res) => {
  const { id } = req.params;
  const updateCliente = await Clientes.findByIdAndUpdate(id, req.body, { new: true });
  res.json({ message: "Cliente actualizado", updateCliente });
};

export { getClientes, postCliente, deleteCliente, putCliente };
