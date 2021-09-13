const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("api running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/tournaments", require("./routes/api/tournaments"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/follow", require("./routes/api/follow"));
app.use("/api/match", require("./routes/api/match"));
app.use("/api/messages", require("./routes/api/messages"));
app.use("/api/upload", require("./routes/api/upload"));

app.listen(PORT, () => console.log(`api running on port ${PORT}`));
