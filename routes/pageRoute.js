const express = require('express')
const pageController = require('../controllers/pageController')
const blogController = require('../controllers/blogController')
const router = express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/blog').get(pageController.getBlogPage)
router.route('/contact').get(pageController.getContactPage)
router.route('/post-details').get(pageController.getPostDetailsPage)
router.route('/add').get(pageController.getAddPost)

router.route('/article').post(blogController.getCreatePost)
module.exports = router