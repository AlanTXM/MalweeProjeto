const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('client',{
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        fantasyName : {
            type : Sequelize.STRING(120),
            allowNull : false
        },
        cnpj : {
            type : Sequelize.STRING(14),
            allowNull : false
        },
        socialreason : {
            type : Sequelize.STRING(120),
            allowNull : false
        },
        customersince : {
            type : Sequelize.DATE(),
            allowNull : false
        },
        status : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
}