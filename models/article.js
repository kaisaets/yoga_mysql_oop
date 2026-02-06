const BaseSQLModel = require("./base");

class ArticleModel extends BaseSQLModel {
  constructor() {
    super("article");
  }

  async findOne(slug){
    const article = await super.findOne('slug', slug)
    return article
  } 
}

module.exports = ArticleModel;
