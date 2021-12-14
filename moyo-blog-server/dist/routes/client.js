"use strict";
const { Router } = require('express');
const router = Router();
//Import required controllers
const PostController = require('../controllers/postController');
const HomeController = require('../controllers/homeController');
const AuthController = require('../controllers/authControllerClient');
const SubscriptionController = require('../controllers/subscriptionController');
//Routes relating to post
router.get('/get-comments/:postId', PostController.get_comments);
router.get('/get-replies/:postId/:commentId', PostController.get_replies);
router.get('/bp/:postId', PostController.get_post);
router.get('/search', PostController.search_posts);
router.post('/add-comment/:postId', PostController.add_comment);
router.post('/add-reply/:postId/:commentId', PostController.add_reply);
//End of routes relating to post
//Routes relating to user
router.post('/create-user', AuthController.create_user);
router.put('/edit-user', AuthController.update_user);
//End of routes relating to user
//Routes relating to Subscription
router.post('/add-subscriber', SubscriptionController.add_subscriber);
//End of routes relating to Subscription
//Routes relating to Home
router.get('/', HomeController.get_home);
//End of routes relating to Home
module.exports = router;
