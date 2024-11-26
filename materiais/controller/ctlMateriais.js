const mdlMateriais = require("../model/mdlMateriais");

const getAllMateriais = (req, res) =>
  (async () => {
    let registro = await mdlMateriais.getAllMateriais();
    res.json({ status: "ok", "registro": registro });
  })();

const getMaterialByID = (req, res) =>
  (async () => {
    const materialID = parseInt(req.body.materialid);
    let registro = await mdlMateriais.getMaterialByID(materialID);

    res.json({ status: "ok", "registro": registro });
  })();

const insertMateriais = (request, res) =>
  (async () => {
    const materialREG = request.body;    
    let { msg, linhasAfetadas } = await mdlMateriais.insertMateriais(materialREG);    
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

const updateMateriais = (request, res) =>
  (async () => {
    const materialREG = request.body;
    let { msg, linhasAfetadas } = await mdlMateriais.updateMateriais(materialREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

const deleteMateriais = (request, res) =>
  (async () => {
    const materialREG = request.body;
    let { msg, linhasAfetadas } = await mdlMateriais.deleteMateriais(materialREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

module.exports = {
  getAllMateriais,
  getMaterialByID,
  insertMateriais,
  updateMateriais,
  deleteMateriais
};
