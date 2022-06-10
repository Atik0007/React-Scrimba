const insertUser = require('../db/userQueries/inserUserQuery.js');

const { generateError } = require('../helper');

const newUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      throw generateError(400, 'Missing parameters');
    }

    const idUser = await insertUser(email, password);

    res.send({
      status: 'Success',
      message: `User ${idUser} created successfully`,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newUser;
