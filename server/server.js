require("dotenv").config();

const express = require("express");
const app = express();
const cors = require('cors');
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());
app.use(cors());

// routers
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

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
