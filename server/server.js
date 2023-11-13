require("dotenv").config();

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

app.get("/hello", (req, res) => {
  res.send("aaaa");
});

// middleware
app.use(express.json());

// routers

app.use("/api/v1/tasks", tasks);

// Connect to mongo

const url = process.env.CONNECTIONSTRING;

const port = process.env.PORT || 3005;

const start = async () => {
  try {
    await connectDB(url);
    app.listen(port, () => {
      console.log(`Server on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
