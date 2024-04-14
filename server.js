const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();

const emailRoute = require("./routes/emailRoute");

app.use(express.json());

app.use("/api/emails", emailRoute);

if (process.env.NODE_ENV === "production") {
    // Set the static folder
    app.use(express.static("client/dist"));

    // Serve the index.html file for all non-API routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
