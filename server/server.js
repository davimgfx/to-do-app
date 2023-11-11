require("dotenv").config();

const express = require('express');

const app = express();

const tasks = require('./routes/tasks')

app.get('/hello', (req, res) => {
    res.send("aaaa");
});

const port = process.env.PORT || 3005;

// middleware
app.use(express.json());


// routers
app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
});

app.use("/api/v1/tasks", tasks)