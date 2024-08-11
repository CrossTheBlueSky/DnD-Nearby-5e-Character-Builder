"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var app = express();
var PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI)
    .then(function () { return console.log('Connected to MongoDB'); })
    .catch(function (error) { return console.error('MongoDB connection error:', error); });
app.get('/', function (req, res) {
    res.send('D&D Character Creator API');
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
