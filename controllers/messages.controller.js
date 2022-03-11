const { publicDecrypt } = require("crypto");
const path = require("path");

function getMessages(req, res) {
    // res.send("<ul><li>Hello Albert!!!</li></ul>");
    res.sendFile(path.join(__dirname, '..', "public", "skimountain.jpg"))
}

function postMessages(req, res) {
    console.log('updating message');

    return res.sendStatus(200);
}

module.exports = {
    getMessages,
    postMessages
}