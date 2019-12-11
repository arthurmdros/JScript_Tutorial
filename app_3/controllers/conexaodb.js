const Sequelize = require('sequelize');
//Conexão BD MySQL
const sequelize = new Sequelize('lojaapp','usuario','senha',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}