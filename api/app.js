const express = require('express');
const app = express();

// routers 
const menuRouter = require('./routes/menuRoutes');

app.use('/api/menu', menuRouter);

app.listen(3000, () => {
});