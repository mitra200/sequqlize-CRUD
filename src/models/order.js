const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('MegaMart', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
const order = sequelize.define('order', {
    // Model attributes are defined here
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'customer',
            key: 'customerId'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'product',
            key: 'productId'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderamount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    orderStatus: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
});
module.exports = order;

