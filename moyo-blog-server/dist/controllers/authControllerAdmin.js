"use strict";
var _a;
module.exports = (_a = class AuthControllerAdmin {
    },
    _a.login = (req, res, next) => {
        //TODO: Get email and pasword from request body
        try {
            //TODO: Confirm details in the database from the User model
            //TODO: Create JWT token
            //TODO: return status 200 with jwt
        }
        catch (error) {
            //TODO: Handle errors
            //TODO: return response 401 with  errors
        }
    },
    _a.add_pin = (req, res, next) => {
        //TODO: Ensure the route is protected an only accessible by the admin :)
        //TODO: Get the pin from the request body
        //TODO: Add pin to the account
        //TODO: Return response 201 with status of success
    },
    _a);
