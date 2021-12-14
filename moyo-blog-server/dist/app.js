"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/client');
const adminRoutes = require('./routes/admin');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.json());
app.get("/", (req, res, next) => {
    res.send("I see you");
});
app.use('/api', clientRoutes);
app.use('/admin', adminRoutes);
mongoose.connect('mongodb://localhost/moyo-blog').then(() => {
    app.listen(port, () => {
        console.log("Listening on port: " + port);
    });
}).catch((err) => {
    console.log(err);
});
