const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({ origin: "https://plots-8vyg.onrender.com", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("database connencted"));
app.use(require("./routes/userRoutes/userRoute"));
app.use(require("./routes/postRoutes/postRoute"));
app.listen(process.env.PORT || 7337, () => {
  console.log(`server running`);
});
