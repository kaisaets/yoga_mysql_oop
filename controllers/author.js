const AuthorModel = new (require("../models/author"))();
const ArticleModel = new (require("../models/article"))();

class authorController {
  async getAllAuthors(req, res) {
    const authors = await AuthorModel.findAll();
    res.status(200).json({ authors: authors });
  }

  async getAuthorArticles(req, res) {
    try {
      const id = req.params.id;
      const author = await AuthorModel.findOne(id);

      if (!author) {
        return res.status(404).json({ message: "Can't find author" });
      }

      const articles = await ArticleModel.findMany("author_id", id);

      res.status(200).json({
        author: author,
        articles: articles,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new authorController();
