const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messageRouter = require("./routes/message.router");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();

    const delta = Date.now() - start;
    // console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json())

app.use("/friends", friendsRouter);

app.use("/messages", messageRouter);

app.listen(PORT, () => {
    console.log(`Running the server at port ${PORT}`)
})