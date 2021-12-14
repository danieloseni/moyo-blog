"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const Post = require('../models/post');
const { noReplyUserId, noPostTitle, noCategories, noDisplayImage, noPostBody } = require('./validation-errors/post-errors');
const multer = require('multer');
const upload = multer({
    dest: '/uploads/'
});
const handleErrors = (err) => {
    var _a, _b;
    let error = {};
    if ((_b = (_a = err.message) === null || _a === void 0 ? void 0 : _a.includes) === null || _b === void 0 ? void 0 : _b.call(_a, "post validation failed")) {
        Object.values(err.errors).forEach((properties) => {
            error[properties.path] = properties.message;
        });
    }
    return error;
};
module.exports = (_a = class PostController {
    },
    _a.get_post = (req, res, next) => {
        //TODO: Get requested post
        //TODO: Return ten of the most viewed & most liked posts
        //TODO: Append all of them to a json
        //TODO: Send JSON to the client
    },
    _a.search_posts = (req, res, next) => {
        //TODO: Return search results ordered by the most relevant and most searched
        //TODO: Return search suggestions based on previously searched posts by users and the most related to what the user has searched
    },
    _a.add_comment = (req, res, next) => {
        //TODO: Get PostId from request url parameter
        //TODO: Get comment from request body
        //TODO: Save comment to the database.
        //TODO: Return response status: success and comment with code of 201
    },
    _a.add_reply = (req, res, next) => {
        //TODO: Get PostId, CommentId from request url parameters
        //TODO: Get reply form request body
        //TODO: Save reply to the database
        //TODO: Return response status: success, as well as the reply and a status code of 201
    },
    _a.get_comments = (req, res, next) => {
        //TODO: Get PostId from URL parameters
        //TODO: Fetch comments from the database
        //TODO: return response json with comments and status code of 200
    },
    _a.get_replies = (req, res, next) => {
        //TODO: Get PostId, CommentId from the URL Parameters
        //TODO: Fetch replies from the database
        //TODO: Return response json with replies and status code of 200
    },
    _a.add_post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        //TODO: Ensure that route is protected and restricted to admin only :)
        //TODO: Get Post title, body, categories, tags subscriber broadcastlist as well as display image from the request body.
        const { title, body, categories, tags } = req.body;
        console.log(req);
        try {
            //TODO: Add post to the database
            const post = yield Post.create({ title, body, categories, displayImage: req.file.filename, tags });
            //TODO: return json with status: success and 201 status code
            res.status(201).json({ post });
        }
        catch (error) {
            //TODO: return appropriate error messages
            console.log(error);
            const errors = handleErrors(error);
            res.status(400).json({ errors });
        }
    }),
    _a.edit_post = (req, res, next) => {
        //TODO: Ensure that route is protected and is restricted to admin only :)
        //TODO: Get PostId from URL parameters
        //TODO: Get title, bod, categories, subscribers and display_image from the request body
        //TODO: Update post in the database
        //TODO: Return success json with status code of 200
    },
    _a.delete_post = (req, res, next) => {
        //TODO: Ensure that route is protected and is restricted to admin only :)
        //TODO: Get PostId from URL parameters
        //TODO: Delete post from the database
        //TODO: Return success json with status code of 200
    },
    _a);
