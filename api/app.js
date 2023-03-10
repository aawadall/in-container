const express = require('express');
const app = express();

// routers 
const menuRouter = require('./routes/menuRoutes');

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use('/menu', menuRouter);

app.listen(3000, () => {
});