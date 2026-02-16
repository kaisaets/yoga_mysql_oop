const BaseSQLModel = require("./base");

class ArticleModel extends BaseSQLModel {
  constructor() {
    super("article");
  }

  async findAll() {
    return super.findAll();
  }

  async findOne(slug) {
    return super.findOne("slug", slug);
  }

  async findMany(author) {
    return super.findMany("author_id", author.id);
  }

  async create(article) {
    return super.create(article);
  }

  async update(id, article) {
    return super.update(id, article);
  }

  async delete(id) {
    return super.delete(id);
  }
}

module.exports = ArticleModel;
