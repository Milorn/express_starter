const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/articles', articleController.getArticlesPage);
router.get('/articles/create', articleController.addArticlePage);

module.exports = router;