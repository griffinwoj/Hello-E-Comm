// Require the dotenv module to load environment variables
require('dotenv').config();
// Require the Sequelize module
const Sequelize = require('sequelize');


const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// Export the sequelize instance for use in other modules
module.exports = sequelize;
