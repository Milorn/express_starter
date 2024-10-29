const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/articles', articleController.getArticlesPage);
router.get('/articles/create', articleController.addArticlePage);
router.post('/articles', articleController.addArticle);

module.exports = router;