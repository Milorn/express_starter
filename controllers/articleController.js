const Article = require('../models/Article');

exports.getArticlesPage = async(req, res) => {
    const articles = await Article.find();
    res.json(articles);
    /* res.render('articles/list', {
        articles
    }); */
};

exports.addArticlePage = (req, res) => {
    res.render('articles/create');
};

exports.addArticle = async(req, res) => {
    await Article.create(req.body);
    res.redirect('/articles');
};

