const BaseSQLModel = require("./base");

class UserModel extends BaseSQLModel {
  constructor() {
    super("user");
  }

  async findOne(username) {
    return super.findOne("username", username);
  }

  async findById(id) {
    return super.findOne("id", id);
  }

  async findByEmail(email) {
    return super.findOne("email", email);
  }
  /**
   * @param {Object} userData
   **/
  async create(userData) {
    return super.create(userData);
  }

  async updateUser(id, userData) {
    return super.update(id, userData);
  }

  async deleteUser(id) {
    return super.delete(id);
  }
}

module.exports = UserModel;
