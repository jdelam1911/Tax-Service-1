const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Client = sequelize.define('Client', {
    name: { type: DataTypes.STRING, allowNull: false },
    taxInfo: { type: DataTypes.JSONB, allowNull: false },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }

});

model.exports = Client;