const express = require('express');
const cors = require('cors');
const routers = require('./routers');
const morgan = require('morgan');
const path = require('path');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const createApp = () => {
  const app = express();
  app.use(cors(corsOptions));
  app.use(express.static(path.join(__dirname, '../CoffeeTown-FE/build')));
  app.use(express.json());
  
  if(process.env.NODE_ENV == 'production'){
    app.use(morgan('combined'));
  } else {
    app.use(morgan('dev'));
}
  app.use(routers);
  app.use((err, req, res, next) => {
    const { status, message } = err;
    console.error(err);
    res.status(status || 400).json({ message });
  });

  return app;
};

module.exports = { createApp };
