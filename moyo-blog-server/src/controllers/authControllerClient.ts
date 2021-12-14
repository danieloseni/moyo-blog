module.exports = class AuthControllerClient{
    static create_user = (req:any, res:any, next:Function) => {
        //TODO: Save user to the database

        //TODO: Get the id of the user saved to the database

        //TODO: Return the id of the user to the client side with status 201

    }

    static update_user = (req:any, res:any, next:Function) => {
        //TODO: Get name, email and id of user from the request
    }
}