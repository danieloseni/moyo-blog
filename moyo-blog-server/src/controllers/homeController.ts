module.exports = class HomeController{

    static get_home = (req:any, res:any, next:Function) => {

        //TODO: Get 20 of the latest posts

        //TODO: Ten of the top posts

        //TODO: Get List of all categories with how many posts per categories

        //TODO: Get Top 10 posts the user might like based on the post others who have liked previously liked posts by the user, have liked

        //TODO: 20 post with the highest views

        //TODO: If user is not registered automatically create user id

        //TODO: Add user to visitors table

        //TODO: Return response json with latest_posts, top_posts, categories, recommended_posts, highest_viewed_posts, user_id 

    }

    static get_admin_index = (req:any, res:any, next:Function) => {
        //TODO: Ensure that the route is protected and only accessible by the admin

        //TODO: Get total number of visits

        //TODO: Get most viewed post,

        //TODO: Get most liked posts,

        
    }

}