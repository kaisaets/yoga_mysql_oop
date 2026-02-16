const express = require('express')
const router = express.Router();
const articleController = require('../controllers/article')
const { isAdmin }  = require('../utils/auth')

router.get('/', (req, res) => articleController.getAllArticles(req, res))
router.get('/article/:slug', (req, res) => articleController.getAllArticleBySlug(req, res))
router.post('/article/create', isAdmin, (req, res) => articleController.createNewArticle(req, res))
router.put('/article/edit/:id', isAdmin, (req, res) => articleController.updateArticle(req, res))
router.delete('/article/delete/:id', isAdmin, (req, res) => articleController.deleteArticle(req, res))

module.exports = router

