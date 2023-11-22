const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const url = "mongodb://127.0.0.1:27017/pharaohs_papyrus_db";
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
