const mongoose = require("mongoose");
var url = "mongodb://127.0.0.1:27017/pharaohs_papyrus_db";

mongoose
    .connect(url)
    .then(() => {
        console.log("Connected to mongodb.");
    })
    .catch((err) => {
        console.log("Could not connect to mongodb.");
        console.log(err);
    });

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
