var express = require('express');
var app = express();
const connectDb = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const port = process.env.PORT || 5000;

app.use(express.json());
var cors = require('cors');
app.use(cors());
connectDb();

app.use("/api/post",postRouter);
app.use("/api/user",userRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});