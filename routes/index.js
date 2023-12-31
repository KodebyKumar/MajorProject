const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_Controller');

console.log('router loaded');


router.get('/home1', homeController.home);
router.use('/users', require('./users'));
router.use('/posts',require('./post'));
router.use('/comments', require('./comments'));
router.use('/api', require('./api'));

module.exports = router;