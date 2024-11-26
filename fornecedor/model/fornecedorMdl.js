const db = require("../../database/dbConnection.js");

const getAllFornecedores = async () => {
  return (
    await db.query("SELECT * FROM fornecedor WHERE deleted = false ORDER BY nome ASC")
  ).rows;
};

const getFornecedorByID = async (fornecedorID) => {
  return (
    await db.query(
      "SELECT * FROM fornecedor WHERE fornecedorid = $1 AND deleted = false",
      [fornecedorID]
    )
  ).rows;
};

const insertFornecedor = async (fornecedorData) => {
  let msg = "ok";
  let linhasAfetadas;
  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO fornecedor (nome, email, telefone, endereco) VALUES ($1, $2, $3, $4)",
        [
          fornecedorData.nome,
          fornecedorData.email,
          fornecedorData.telefone,
          fornecedorData.endereco,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlFornecedor|insertFornecedor] " + error.detail;
    linhasAfetadas = -1;
  }
  return { msg, linhasAfetadas };
};

const updateFornecedor = async (fornecedorData) => {
  let msg = "ok";
  let linhasAfetadas;
  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE fornecedor SET nome = $2, email = $3, telefone = $4, endereco = $5 WHERE fornecedorid = $1",
        [
          fornecedorData.fornecedorid,
          fornecedorData.nome,
          fornecedorData.email,
          fornecedorData.telefone,
          fornecedorData.endereco,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlFornecedores|updateFornecedor] " + error.detail;
    linhasAfetadas = -1;
  }
  return { msg, linhasAfetadas };
};

const deleteFornecedor = async (fornecedorID) => {
  let msg = "ok";
  let linhasAfetadas;
  try {
    linhasAfetadas = (
      await db.query("UPDATE fornecedor SET deleted = true WHERE fornecedorid = $1", [fornecedorID])
    ).rowCount;
  } catch (error) {
    msg = "[mdlFornecedores|deleteFornecedor] " + error.detail;
    linhasAfetadas = -1;
  }
  return { msg, linhasAfetadas };
};

module.exports = {
  getAllFornecedores,
  getFornecedorByID,
  insertFornecedor,
  updateFornecedor,
  deleteFornecedor,
};