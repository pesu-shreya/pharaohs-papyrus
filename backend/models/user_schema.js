const mongoose = require("mongoose");
const connectDB = require("../database/config");

connectDB();

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
