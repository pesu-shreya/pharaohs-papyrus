const express = require("express");
const users = require("./mongodb");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get("/", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await users.findOne({ email: email });
        if (check) {
            res.json("exists");
        } else {
            res.json("noexist");
        }
    } catch (err) {
        console.log(err);
    }
});

app.post("/signup", async (req, res) => {
    const { userName, email, password } = req.body;

    const data = {
        userName: userName,
        email: email,
        password: password,
    };

    try {
        const check = await users.findOne({ email: email });
        if (check) {
            res.json("exists");
        } else {
            res.json("noexist");
            await users.insertMany([data]);
        }
    } catch (err) {
        console.log(err);
    }
});

app.listen(3000, () => {
    console.log("Port connected");
});
