//Bibliotecas usadas em nosso projeto
const express = require("express");
require("dotenv").config();
const bodyparser = require("body-parser");

//importaremos nossas rotas 
const router = require("./routes/routes.js");

//importaremos o nosso sgbd
const pool = require("./database/dbConnection.js");

//iniciar o express e a rota
const app = express();
app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});



