const { Sequelize } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define('request', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        fkClient : {
            type:Sequelize.INTEGER,
            allowNull : false
        },
        issuanceDate : {
            type: Sequelize.STRING(),
            allowNull: false
        },
        deliveryDate : {
            type: Sequelize.STRING(),
            allowNull: false
        },
        fkAddress : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        total : {
            type : Sequelize.DECIMAL(6,2),
            allowNull : false
        },
        status : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
    
}