const myDataSource = require('../models/index');


const menuCategory = () => {
  return new Promise((res, rej) => {
    myDataSource.query('SELECT * FROM menucategory', (error, results) => {
      if (error) {
        rej(error);
      } else {
        res(results);
      }
    });
  });
};

module.exports = {
  menuCategory,
};