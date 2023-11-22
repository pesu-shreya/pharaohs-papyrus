const mongoose = require("mongoose");
const connectDB = require("../database/config");

connectDB();

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
});

const Event = mongoose.model("events", eventSchema);

module.exports = Event;
