const { Sequelize } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define('requestProduct', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : true
        },
        fkRequest : {
            type:Sequelize.INTEGER,
            allowNull:false
        },
        fkProduct : {
            type:Sequelize.INTEGER,
            allowNull:false
        },
        quantity : {
            type: Sequelize.DECIMAL(11,10),
            allowNull: false,
        },
        unitaryValue : {
            type: Sequelize.DECIMAL(6,2),
            allowNull: false,
        },
        discount : {
            type : Sequelize.DECIMAL(6,2),
            allowNull : false
        },
        addition : {
            type : Sequelize.DECIMAL(6,2),
            allowNull : false
        },
        total : {
            type : Sequelize.DECIMAL(6,2),
            allowNull : false,
        },
        status : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
}