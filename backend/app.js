const express = require("express");
const cors = require("cors"); // Import CORS //new
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
// const dotenv = require("dotenv");
const path = require("path");

const errorMiddleware = require("./middleware/error");

//new
// CORS configuration to allow specific frontend domain
const corsOptions = {
  origin: "*", // Your frontend URL (change it if needed)
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true, // Allows cookies and credentials to be sent with requests
};

app.use(cors(corsOptions)); // Apply CORS middleware to your app
//new bymmm above

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/.env" });
}

app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: "5mb" })); // Set to 5 MB or whatever size you need
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//connecting backend and frontend for deployment
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//Middleware for errors
app.use(errorMiddleware);

module.exports = app;
