const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('MegaMart', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
const product = sequelize.define('product', {
    // Model attributes are defined here
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productDescription: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    // Other model options go here
});
module.exports = product;