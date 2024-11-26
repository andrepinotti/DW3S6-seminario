const express = require("express");
const router = express.Router();

const appLogin = require("../login/controller/ctlLogin.js");
const appMateriais = require("../materiais/controller/ctlMateriais.js");

const appObras = require("../obras/controller/ctlObras.js");
const appFornecedores = require("../fornecedor/controller/fornecedorCtl.js");

router.use((req, res, next) => {
    next();
});

router.get("/", (req, res) => {
    res.send("Hello World!");
})

//NOTE - rotas obras
router.get('/obra', appObras.getAllObras);
router.get('/obra/:obraid', appLogin.AutenticaJWT, appObras.getObraByID);
router.post('/obra', appLogin.AutenticaJWT, appObras.insertObra);
router.put('/obra', appLogin.AutenticaJWT, appObras.updateObra);
router.delete('/obra/:obraid', appLogin.AutenticaJWT, appObras.deleteObra);


//NOTE -> rotas materiais
router.get("/GetAll", appMateriais.getAllMateriais);
router.post("/GetById",appLogin.AutenticaJWT, appMateriais.getMaterialByID);
router.post("/Insert", appLogin.AutenticaJWT, appMateriais.insertMateriais);
router.post("/Update", appMateriais.updateMateriais);
router.post("/DeleteMateriais", appLogin.AutenticaJWT, appMateriais.deleteMateriais)


//NOTE - rotas fornecedores
router.get('/fornecedor', appFornecedores.getAllFornecedores);
router.get('/fornecedor/:fornecedorid',appLogin.AutenticaJWT , appFornecedores.getFornecedorByID);
router.post('/fornecedor', appLogin.AutenticaJWT , appFornecedores.insertFornecedor);
router.put('/fornecedor', appLogin.AutenticaJWT, appFornecedores.updateFornecedor);
router.delete('/fornecedor/:fornecedorid', appLogin.AutenticaJWT, appFornecedores.deleteFornecedor);


router.post("/Login", appLogin.Login);
router.post("/Logout", appLogin.Logout);


module.exports = router;