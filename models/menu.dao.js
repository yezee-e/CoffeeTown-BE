const myDataSource = require('../models/index');


const menus = () => {
  return new Promise((res, rej) => {
    myDataSource.query('SELECT * FROM menu', (error, results) => {
      if (error) {
        rej(error);
      } else {
        res(results);
      }
    });
  });
};

module.exports = {
  menus,
};