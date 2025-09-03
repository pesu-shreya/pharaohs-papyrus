const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    title: { 
        type: String, 
        required: true 
    },
    description: String,
    category: String,
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium",
    },
    start: Date,
    end: Date,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("events", eventSchema);
