const myDataSource = require('./index');


const products = () => {
  return new Promise((res, rej) => {
    myDataSource.query('SELECT * FROM product', (error, results) => {
      if (error) {
        rej(error);
      } else {
        res(results);
      }
    });
  });
};

module.exports = {
  products,
};