const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.post("/user/register", (req, res) => UserController.register(req, res));
router.post("/user/login", (req, res) => UserController.login(req, res))
router.post("/user/logout", (req, res) => UserController.logout(req, res))


module.exports = router;
