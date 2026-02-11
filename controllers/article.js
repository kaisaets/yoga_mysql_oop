const articleDbModel = require("../models/article");
const ArticleModel = new articleDbModel();

class articleController {
  constructor() {
    const articles = [];
  }

  async getAllArticles(req, res) {
    const articles = await ArticleModel.findAll();
    res.status(201).json({ articles: articles });
  }

  async getAllArticleBySlug(req, res) {
    const article = await ArticleModel.findOne(req.params.slug);
    res.status(201).json({ article: article });
  }

  async createNewArticle(req, res) {
    const newArticle = {
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image,
      body: req.body.body,
      published: new Date().toISOString().slice(0, 19).replace("T", " "),
      author_id: req.body.author_id,
    };
    const articleId = await ArticleModel.create(newArticle);
    res.status(201).json({
      message: `created article with id ${articleId}`,
      article: { id: articleId, ...newArticle },
    });
  }

  async updateArticle(req, res) {
    try {
      const articleId = req.params.id;

      const updatedArticle = {
        name: req.body.name,
        slug: req.body.slug,
        image: req.body.image,
        body: req.body.body,
        author_id: req.body.author_id,
      };
      const result = await ArticleModel.update(articleId, updatedArticle);
      res.status(200).json({
        message: "Article updated successfully",
        id: articleId,
      });
    } catch (error) {
      console.error("Update error: ", error);

      res.status(500).json({
        message: "Error occurred while updating the article",
        error: error.message,
      });
    }
  }
}
module.exports = new articleController();
