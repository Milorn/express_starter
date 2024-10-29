const express = require('express');

const articleRoutes = require('./routes/articleRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use(articleRoutes);
app.use(productRoutes);

app.listen(3000, () => console.log('Started server on: http://localhost:3000'));