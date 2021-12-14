export {}

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {v4} = require('uuid')
const {noReplyUserId, noReply, noPostTitle, noCommentUserId, noComment, noCategories, noDisplayImage, noPostBody} = require('../controllers/validation-errors/post-errors')


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

})

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
})

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, noPostTitle],
    },
    categories: {
        type: [String],
        validate: [
            (value: any[]) => {
                if(value.length > 0) return true
                return false
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
    
})

const createTitleUrl = (title: string) => {
    const titleUrl = title
    ?.trim?.()
    // ?.replaceAll(" ", "_")
    ?.replace(/ /g, "_")
    // ?.replaceAll?.("\n", "_")
    ?.replace?.(/\n/g, "_")
    // ?.replaceAll?.("\n", "_")
    ?.replace?.(/\t/g, "_")
    
    // if((await Post.find({titleId: titleUrl})).length > 0) return createTitleUrl(title)

    return titleUrl+`_${v4()}`

}

PostSchema.pre("save", function(this: any, next: Function){
    console.log(this)
    this.titleId = createTitleUrl(this.title)
    // this.titleId = " createTitleUrl(this.title)"
    this.date = Date.now()
    next()
})



const Post = mongoose.model('post', PostSchema);



module.exports = Post