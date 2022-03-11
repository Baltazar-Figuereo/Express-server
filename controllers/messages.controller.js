const { publicDecrypt } = require("crypto");
const path = require("path");

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', "public", "images", "skimountain.jpg"));
}

function postMessages(req, res) {
    console.log('updating message');

    return res.sendStatus(200);
}

module.exports = {
    getMessages,
    postMessages
}