const express = require("express");
const users = require("./models/user_schema");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./database/config");

const Event = require("./models/event_schema");
const Journal = require("./models/journal_schema");

// Event CRUD
app.get("/events", auth, async (req, res) => {
    const events = await Event.find({ userId: req.userId });
    res.json(events);
});
app.post("/events", auth, async (req, res) => {
    const event = new Event({ ...req.body, userId: req.userId });
    await event.save();
    res.json(event);
});
app.put("/events/:id", auth, async (req, res) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(event);
});
app.delete("/events/:id", auth, async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

// Journal CRUD
app.get("/journals", auth, async (req, res) => {
    const journals = await Journal.find({ userId: req.userId });
    res.json(journals);
});
app.post("/journals", auth, async (req, res) => {
    const journal = new Journal({ ...req.body, userId: req.userId });
    await journal.save();
    res.json(journal);
});
app.put("/journals/:id", auth, async (req, res) => {
    const journal = await Journal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(journal);
});
app.delete("/journals/:id", auth, async (req, res) => {
    await Journal.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

const SECRET = "your_jwt_secret"; // Use env var in production

// Sign Up
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existing = await users.findOne({ email });
        if (existing)
            return res.status(400).json({ error: "Email already exists" });
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new users({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();
        const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1d" });
        res.json({
            token,
            user: { id: user._id, name: user.name, email: user.email },
        });
    } catch (err) {
        res.status(400).json({
            error: "Signup failed",
        });
    }
});

// Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1d" });
    res.json({
        token,
        user: { id: user._id, name: user.name, email: user.email },
    });
});

// Auth middleware
function auth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token" });
    try {
        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded.id;
        next();
    } catch {
        res.status(401).json({ error: "Invalid token" });
    }
}

app.listen(PORT, () => {
    console.log(`Port connected, server started on port ${PORT}`);
});
