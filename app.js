//Bibliotecas usadas em nosso projeto
const express = require("express");
require("dotenv").config();

//iniciar o express 
const app = express();

const port = process.env.PORT 

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});


