"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4 } = require('uuid');
const { noReplyUserId, noReply, noPostTitle, noCommentUserId, noComment, noCategories, noDisplayImage, noPostBody } = require('../controllers/validation-errors/post-errors');
const ReplySchema = new Schema({
    userId: {
        type: String,
        required: [true, noReplyUserId]
    },
    date: {
        type: Date
    },
    reply: {
        type: String,
        required: [true, noReply]
    },
});
const CommentSchema = new Schema({
    userId: {
        type: String,
        required: [true, noCommentUserId]
    },
    date: {
        type: Date
    },
    comment: {
        type: String,
        required: [true, noComment]
    },
    replies: {
        type: [ReplySchema]
    }
});
const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, noPostTitle],
    },
    categories: {
        type: [String],
        validate: [
            (value) => {
                if (value.length > 0)
                    return true;
                return false;
            },
            noCategories
        ]
    },
    date: {
        type: Date
    },
    likes: {
        type: [String]
    },
    dislikes: {
        type: [String]
    },
    views: {
        type: [String]
    },
    displayImage: {
        type: String,
        required: [true, noDisplayImage]
    },
    body: {
        type: String,
        required: [true, noPostBody]
    },
    tags: {
        type: [String]
    },
    comments: {
        type: [CommentSchema]
    },
    titleId: {
        type: String
    },
});
const createTitleUrl = (title) => {
    var _a, _b, _c, _d, _e, _f;
    const titleUrl = (_f = (_e = (_d = (_c = (_b = (_a = title === null || title === void 0 ? void 0 : title.trim) === null || _a === void 0 ? void 0 : _a.call(title)) === null || _b === void 0 ? void 0 : _b.replace(/ /g, "_")) === null || _c === void 0 ? void 0 : _c.replace) === null || _d === void 0 ? void 0 : _d.call(_c, /\n/g, "_")) === null || _e === void 0 ? void 0 : _e.replace) === null || _f === void 0 ? void 0 : _f.call(_e, /\t/g, "_");
    // if((await Post.find({titleId: titleUrl})).length > 0) return createTitleUrl(title)
    return titleUrl + `_${v4()}`;
};
PostSchema.pre("save", function (next) {
    console.log(this);
    this.titleId = createTitleUrl(this.title);
    // this.titleId = " createTitleUrl(this.title)"
    this.date = Date.now();
    next();
});
const Post = mongoose.model('post', PostSchema);
module.exports = Post;
