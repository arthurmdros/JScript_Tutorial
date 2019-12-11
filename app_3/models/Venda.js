const Sequelize = require('sequelize');
const sequelize = new Sequelize('lojaapp','usuario','senha',{
    host: "localhost",
    dialect: 'mysql'
})

const Venda = sequelize.define('vendas', {
    cliente: {
        type: Sequelize.STRING
    },
    vendedor: {
        type: Sequelize.STRING
    },
    valor: {
        type: Sequelize.DOUBLE
    },
    produto: {
        type: Sequelize.STRING
    } 
})


module.exports = Venda;

/* SEMPRE DEVE SER COMENTADO OU APAGADO ESSES COMANDOS
LOGO APÓS SER CRIADO AS TABELAS A PRIMEIRA VEZ
Venda.sync({force: true})
*/