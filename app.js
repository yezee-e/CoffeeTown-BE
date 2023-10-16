const express = require('express');
const cors = require('cors');
const routers = require('./routers');
const morgan = require('morgan');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const createApp = () => {
  const app = express();
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(morgan('combined'));
  app.use(routers);
  app.use((err, req, res, next) => {
    const { status, message } = err;
    console.error(err);
    res.status(status || 500).json({ message });
  });

  return app;
};//현준

module.exports = { createApp };
