const Post = require('../models/post')
const { noReplyUserId, noPostTitle, noCategories, noDisplayImage, noPostBody } = require('./validation-errors/post-errors')
const multer = require('multer')
const upload = multer({
    dest: '/uploads/'
})


const handleErrors = (err: any) => {
    let error: any = {}


    if(err.message?.includes?.("post validation failed")){
        Object.values(err.errors).forEach((properties: any) => {
            error[properties.path] = properties.message
        })
    }

    return error;
}
module.exports = class PostController{
    
    static get_post = (req:any, res:any, next:Function) => {

        //TODO: Get requested post

        //TODO: Return ten of the most viewed & most liked posts

        //TODO: Append all of them to a json

        //TODO: Send JSON to the client

    }

    static search_posts = (req:any, res:any, next:Function) => {
        //TODO: Return search results ordered by the most relevant and most searched

        //TODO: Return search suggestions based on previously searched posts by users and the most related to what the user has searched
    }

    static add_comment = (req:any, res:any, next:Function) => {
        //TODO: Get PostId from request url parameter

        //TODO: Get comment from request body

        //TODO: Save comment to the database.

        //TODO: Return response status: success and comment with code of 201
    }

    static add_reply = (req:any, res:any, next:Function) => {
        //TODO: Get PostId, CommentId from request url parameters

        //TODO: Get reply form request body
        
        //TODO: Save reply to the database

        //TODO: Return response status: success, as well as the reply and a status code of 201
    }

    static get_comments = (req:any, res:any, next:Function) => {
        //TODO: Get PostId from URL parameters

        //TODO: Fetch comments from the database

        //TODO: return response json with comments and status code of 200
    }

    static get_replies = (req:any, res:any, next:Function) => {
        //TODO: Get PostId, CommentId from the URL Parameters

        //TODO: Fetch replies from the database

        //TODO: Return response json with replies and status code of 200
    }

    static add_post = async (req:any, res:any, next:Function) => {
        //TODO: Ensure that route is protected and restricted to admin only :)
        
        //TODO: Get Post title, body, categories, tags subscriber broadcastlist as well as display image from the request body.
        const {title, body, categories, tags} = req.body
        console.log(req)
        try{
            //TODO: Add post to the database
            const post = await Post.create({title, body, categories, displayImage: req.file.filename, tags})
            //TODO: return json with status: success and 201 status code
            res.status(201).json({post})
        }catch(error){
            //TODO: return appropriate error messages
            console.log(error)
            const errors = handleErrors(error)
            res.status(400).json({errors})
        }


    }

    static edit_post = (req:any, res:any, next:Function) => {
        //TODO: Ensure that route is protected and is restricted to admin only :)

        //TODO: Get PostId from URL parameters

        //TODO: Get title, bod, categories, subscribers and display_image from the request body

        //TODO: Update post in the database

        //TODO: Return success json with status code of 200
    }

    static delete_post = (req:any, res:any, next:Function) => {
        //TODO: Ensure that route is protected and is restricted to admin only :)

        //TODO: Get PostId from URL parameters

        //TODO: Delete post from the database

        //TODO: Return success json with status code of 200
    }


}