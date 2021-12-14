"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = Schema({
    title: {
        type: String,
        required: true,
    },
});
const Category = mongoose.model('categorie', CategorySchema);
module.exports = Category;
