const express = require('express')
const router = express.Router();
const authorController = require('../controllers/author')

router.get('/author', authorController.getAllAuthors)
router.get('/author/:id', authorController.getAuthorArticles)

module.exports = router