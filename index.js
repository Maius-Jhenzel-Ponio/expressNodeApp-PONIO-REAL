const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const http = require("http");
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send("Server is Running");
});

mongoose
    .connect("mongodb+srv://jhenzelponio:jenjhenjhenzel@cluster0.0lmnp.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    });

app.use(cors());
app.use(express.json());

const submitplayerForm = require('./API/submit')

app.use("/submit", submitplayerForm);

const path = require("path");

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server\

/*const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})