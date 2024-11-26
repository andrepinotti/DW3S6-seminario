const mdlFornecedores = require("../model/fornecedorMdl.js");

const getAllFornecedores = async (req, res) => {
  const fornecedores = await mdlFornecedores.getAllFornecedores();
  res.json({ status: "ok", registros: fornecedores });
};

const getFornecedorByID = async (req, res) => {
  const fornecedorID = parseInt(req.params.fornecedorid);
  const fornecedor = await mdlFornecedores.getFornecedorByID(fornecedorID);
  res.json({ status: "ok", registro: fornecedor });
};

const insertFornecedor = async (req, res) => {
  const fornecedorData = req.body;
  const { msg, linhasAfetadas } = await mdlFornecedores.insertFornecedor(
    fornecedorData
  );
  res.json({ status: msg, linhasAfetadas });
};

const updateFornecedor = async (req, res) => {
  const fornecedorData = req.body;
  const { msg, linhasAfetadas } = await mdlFornecedores.updateFornecedor(
    fornecedorData
  );
  res.json({ status: msg, linhasAfetadas });
};

const deleteFornecedor = async (req, res) => {
  const fornecedorID = parseInt(req.params.fornecedorid);
  const { msg, linhasAfetadas } = await mdlFornecedores.deleteFornecedor(fornecedorID)
  res.json({ status: msg, linhasAfetadas });
};

module.exports = {
    getAllFornecedores,
    getFornecedorByID,
    insertFornecedor,
    updateFornecedor,
    deleteFornecedor,
  };