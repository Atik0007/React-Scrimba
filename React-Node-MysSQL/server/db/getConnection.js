require('dotenv').config();

const mysql = require('mysql2/promise');

const { PORT, MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

let connection;

const getConnection = async () => {
  try {
    if (!connection) {
      connection = await mysql.createConnection({
        connectionLimit: 10,
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB,
        timezone: 'Z',
      });
    }
    return connection;
  } catch (err) {
    throw new Error(`Error connecting to database: ${err}`);
  }
};
module.exports = getConnection;
