const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.post("/user/register", (req, res) => UserController.register(req, res));

module.exports = router;
