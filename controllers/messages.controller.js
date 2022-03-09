function getMessages(req, res) {
    res.send("<ul><li>Hello Albert!!!</li></ul>");
}

function postMessages(req, res) {
    console.log('updating message');

    return res.sendStatus(200);
}

module.exports = {
    getMessages,
    postMessages
}