const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200).send("Hello world")
});

app.get('/messages', (req, res) => {
    res.status(200).send("<ul><li>Hello Albert!!!</li></ul>")
})

app.post("messages", (req, res) => {
    console.log('updating message')
})

app.listen(PORT, () => {
    console.log(`Running the server at port ${PORT}`)
})