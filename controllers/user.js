const bcrypt = require("bcrypt");
const UserModel = require("../models/user");

class UserController {
  constructor() {
    this.model = new UserModel();
    this.register = this.register.bind(this);
  }

  async register(req, res) {
    try {
      const cryptPassword = await bcrypt.hash(req.body.password, 10);
      const registeredUserId = await this.model.create({
        username: req.body.username,
        email: req.body.email,
        password: cryptPassword
      });

      if (registeredUserId) {
        const userData = await this.model.findById(registeredUserId);
        req.session.user = {
          user_id: userData.id,
          username: userData.username,
        };
        res.status(201).json({
          message: "New user registered",
          user_session: req.session.user
        });
      } else {
        res.status(404).json({ error: "User not registered" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
