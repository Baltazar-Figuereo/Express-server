const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200).send({
        id: 1,
        name: "Sir Isaac Newton"
    })
});

app.get('/messages', (req, res) => {
    res.send("<ul><li>Hello Albert!!!</li></ul>")
})

app.post("messages", (req, res) => {
    console.log('updating message')
})

app.listen(PORT, () => {
    console.log(`Running the server at port ${PORT}`)
})