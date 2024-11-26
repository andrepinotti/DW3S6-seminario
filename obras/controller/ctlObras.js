const mdlObras = require("../model/mdlObras");

const getAllObras = async (req, res) => {
  const obras = await mdlObras.getAllObras();
  res.json({ status: "ok", registros: obras });
};

const getObraByID = async (req, res) => {
  const obraID = parseInt(req.params.obraid);
  const obra = await mdlObras.getObraByID(obraID);
  res.json({ status: "ok", registro: obra });
};

const insertObra = async (req, res) => {
  const obraData = req.body;
  const { msg, linhasAfetadas } = await mdlObras.insertObra(obraData);
  res.json({ status: msg, linhasAfetadas });
};

const updateObra = async (req, res) => {
  const obraData = req.body;
  const { msg, linhasAfetadas } = await mdlObras.updateObra(obraData);
  res.json({ status: msg, linhasAfetadas });
};

const deleteObra = async (req, res) => {
  const obraID = parseInt(req.params.obraid);
  const { msg, linhasAfetadas } = await mdlObras.deleteObra(obraID);
  res.json({ status: msg, linhasAfetadas });
};

module.exports = {
  getAllObras,
  getObraByID,
  insertObra,
  updateObra,
  deleteObra,
};