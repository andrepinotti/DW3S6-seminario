const db = require("../../database/dbConnection.js");

const getAllObras = async () => {
  return (
    await db.query("SELECT * FROM obra WHERE deleted = false ORDER BY nome ASC")
  ).rows;
};

const getObraByID = async (obraID) => {
  return (
    await db.query("SELECT * FROM obra WHERE obraid = $1 AND deleted = false", [
      obraID,
    ])
  ).rows;
};

const insertObra = async (obraData) => {
  let msg = "ok";
  let linhasAfetadas;
  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO obra (nome, endereco, data_inicio, data_fim, status) VALUES ($1, $2, $3, $4, $5)",
        [
          obraData.nome,
          obraData.endereco,
          obraData.data_inicio,
          obraData.data_fim,
          obraData.status,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlObras|insertObra] " + error.detail;
    linhasAfetadas = -1;
  }
  return { msg, linhasAfetadas };
};

const updateObra = async (obraData) => {
  let msg = "ok";
  let linhasAfetadas;
  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE obra SET nome = $2, endereco = $3, data_inicio = $4, data_fim = $5, status = $6 WHERE obraid = $1",
        [
          obraData.obraid,
          obraData.nome,
          obraData.endereco,
          obraData.data_inicio,
          obraData.data_fim,
          obraData.status,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlObras|updateObra] " + error.detail;
    linhasAfetadas = -1;
  }
  return { msg, linhasAfetadas };
};

const deleteObra = async (obraID) => {
  let msg = "ok";
  let linhasAfetadas;
  try {
    linhasAfetadas = (
      await db.query("UPDATE obra SET deleted = true WHERE obraid = $1", [obraID])
    ).rowCount;
  } catch (error) {
    msg = "[mdlObras|deleteObra] " + error.detail;
    linhasAfetadas = -1;
  }
  return { msg, linhasAfetadas };
};

module.exports = {
  getAllObras,
  getObraByID,
  insertObra,
  updateObra,
  deleteObra,
};