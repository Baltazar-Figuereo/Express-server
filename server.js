const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messageController = require("./controllers/messages.controller");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();

    const delta = Date.now() - start;
    // console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.json())

app.post("/friends", friendsController.postFriends);

app.get("/friends", friendsController.getFriends);

app.get("/friends/:friendId", friendsController.getFriend)

app.get('/messages', messageController.getMessages);

app.post("/messages", messageController.postMessages);

app.listen(PORT, () => {
    console.log(`Running the server at port ${PORT}`)
})