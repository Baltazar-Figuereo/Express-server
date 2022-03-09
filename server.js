const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
    {
      id: 0,
      name: 'Albert Einstein'
    },
    {
      id: 1,
      name: 'Sir Isaac Newton'
    }
];

app.use((req, res, next) => {
    const start = Date.now();
    next();

    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.get("/friends", (req, res) => {
    res.status(200).json(friends);
});

app.get("/friends/:friendId", (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];

    if (friend) {
        res.json(friend);
    }
    else {
        res.status(404).json({
            error: "Friend does not exist."
        });
    }

    // console.log(friendId);
})

app.get('/messages', (req, res) => {
    res.send("<ul><li>Hello Albert!!!</li></ul>")
})

app.post("/messages", (req, res) => {
    console.log('updating message')
})

app.listen(PORT, () => {
    console.log(`Running the server at port ${PORT}`)
})