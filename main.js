const express = require('express');
const mongoose = require('mongoose');

const articleRoutes = require('./routes/articleRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(productRoutes);
app.use(articleRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/blog');

app.listen(3000, () => console.log('Started server on: http://localhost:3000'));

