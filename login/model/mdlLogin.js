const database = require('../../database/dbConnection.js');

const GetCredencial = async (loginPar) => {

    return (await database.query(
        "SELECT * FROM usuario WHERE id = $1"
    )).rows;

}

module.exports = { GetCredencial }