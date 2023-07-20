const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const profileRoutes = require("./routes/Profile");
const forumRoutes = require("./routes/forum");
//add routs here
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/Profile", profileRoutes);
app.use("/forum", forumRoutes);

const PORT = process.env.PORT || 8080;

// db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.listen(PORT, console.log(`listining on port ${PORT}`));

module.exports = app;
