const {Pool} = require("pg")

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})

pool.connect((err, client, release) => {
    if(err){
        return console.error(`Erro ao se conectar com o banco:` + err.message);
    }

    console.log(`Conexão feita com sucesso`);
    
})

module.exports = pool