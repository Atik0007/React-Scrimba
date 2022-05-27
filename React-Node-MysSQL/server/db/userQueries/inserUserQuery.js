const getConnection = require('../getConnection');

const { generateError } = require('../../helper');

const insertUser = async (email, password) => {
  let connection;
  try {
    connection = await getConnection();

    const [users] = await connection.query(
      `SELECT id FROM users WHERE email = ?`,
      [email]
    );

    if (users.length > 0) {
      throw generateError(409, 'User already exists');
    }

    const [newUser] = await connection.query(
      `INSERT INTO users (email, password) VALUES (?, ?)`,
      [email, password]
    );

    return newUser.insertId;
  } catch (err) {
    throw new Error(`Error creating user: ${err}`);
    /* finally {
    if (connection) connection.release();
  } */
  }
};

module.exports = insertUser;
