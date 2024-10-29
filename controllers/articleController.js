const articles = [];

exports.getArticlesPage = (req, res) => {
    res.render('articles/list');
};

exports.addArticlePage = (req, res) => {
    res.render('articles/create');
};

exports.addArticle = (req, res) => {

};

