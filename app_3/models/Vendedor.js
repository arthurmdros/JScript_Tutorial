const Sequelize = require('sequelize');
const sequelize = new Sequelize('lojaapp','usuario','senha',{
    host: "localhost",
    dialect: 'mysql'
})

const Vendedor = sequelize.define('vendedores', {
    nome: {
        type: Sequelize.STRING
    },
    cargo: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    }
})


module.exports = Vendedor;


/* SEMPRE DEVE SER COMENTADO OU APAGADO ESSES COMANDOS
LOGO APÓS SER CRIADO AS TABELAS A PRIMEIRA VEZ
Vendedor.sync({force: true})
*/
