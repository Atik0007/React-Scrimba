require('dotenv').config();
const { PORT } = process.env;

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const morgan = require('morgan');
app.use(morgan('dev'));

const newUser = require('./controllers/newUser');

app.post('/users', newUser);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send({
    status: 'error',
    message: err.message,
  });
});

app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found',
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
