require('dotenv').config();
const menuCategoryRouter = require('./routers/menuCategoryRouter.router');
const { createApp } = require('./app');

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT || 5000;

  try {
    app.listen(PORT, () => {
      console.log(`Server listening on Port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
