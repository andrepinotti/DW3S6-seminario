const db = require("../../database/dbConnection.js");

const getAllMateriais = async () => {
  return (
    await db.query(
      "SELECT *, (SELECT descricao from CATEGORIAS where categoriaid = materiais.categoriaid)" +
        "FROM materiais WHERE deleted = false ORDER BY nome ASC"
    )
  ).rows;
};

const getMaterialByID = async (materialIDPar) => {
  return (
    await db.query(
      "SELECT *, (SELECT descricao from CATEGORIAS where categoriaid = materiais.categoriaid)" +
        "FROM materiais WHERE materialid = $1 and deleted = false ORDER BY nome ASC",
      [materialIDPar]
    )
  ).rows;
};

const insertMateriais = async (materialREGPar) => {
  let linhasAfetadas;
  let msg = "ok";
  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO materiais " + "VALUES(default, $1, $2, $3, $4, $5)",
        [
          materialREGPar.nome,
          materialREGPar.descricao,
          materialREGPar.quantidade,
          materialREGPar.categoriaid,
          materialREGPar.deleted,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlMateriais|insertMateriais] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const updateMateriais = async (materialREGPar) => {
  let linhasAfetadas;
  let msg = "ok";
  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE materiais SET " +
          "nome = $2, " +
          "descricao = $3, " +
          "quantidade = $4, " +
          "categoriaid = $5, " +
          "deleted = $6 " +
          "WHERE materialid = $1",
        [
          materialREGPar.materialid,
          materialREGPar.nome,
          materialREGPar.descricao,
          materialREGPar.quantidade,
          materialREGPar.categoriaid,
          materialREGPar.deleted,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlMateriais|updateMateriais] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const deleteMateriais = async (materialREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE materiais SET deleted = true WHERE materialid = $1",
        [materialREGPar.materialid]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlMateriais|deleteMateriais] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  getAllMateriais,
  getMaterialByID,
  insertMateriais,
  updateMateriais,
  deleteMateriais,
};
