// models/user.model.js

const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

// Create Sequelize instance
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
  }
);

// Define the 'user' model
const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  event: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log("User table synced successfully.");
  })
  .catch(err => {
    console.error("Error syncing User table:", err);
  });

module.exports = { User, sequelize };
