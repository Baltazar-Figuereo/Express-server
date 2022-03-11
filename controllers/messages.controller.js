const { publicDecrypt } = require("crypto");
const path = require("path");

function getMessages(req, res) {
    // res.send("<ul><li>Hello Albert!!!</li></ul>");
    // res.sendFile(path.join(__dirname, '..', "public", "images", "skimountain.jpg"));
    res.render("messages.hbs", {
        title: "Messages to my friends",
        friend: "Elon Musk"
    })
}

function postMessages(req, res) {
    console.log('updating message');

    return res.sendStatus(200);
}

module.exports = {
    getMessages,
    postMessages
}