"use strict";
var _a;
module.exports = (_a = class SubscriptionController {
    },
    _a.add_subscriber = (req, res, next) => {
        //TODO: Get the name and email of the subscriber from the request
        //TODO: Add user to the subscribers table
        //TODO: Return json to the client with status: success if saving was successful and status: failed if saving failed. As well as a 201 status code
    },
    _a.get_subscribers = (req, res, next) => {
        //TODO: Ensure that the route is protected and is restricted to admin only :)
        //TODO: get list of subscribers from database
        //TODO: Return json with list of subscribers and status code of 200
    },
    _a);
