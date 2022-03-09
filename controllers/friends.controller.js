const model = require("../models/friends.model");

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];

    if (friend) {
        return res.json(friend);
    }
    else {
        return res.status(404).json({
            error: "Friend does not exist."
        });
    }
}

function getFriends(req, res) {
    return res.status(200).json(model);
}

function postFriends(req, res) {
    if(!req.body.name) {
        return res.status(400).json({
            error: "Missing friend name"
        })
    }

    const newFriend = {
        id: model.length,
        name: req.body.name
    };

    model.push(newFriend);

    return res.json(newFriend);
}

module.exports = {
    getFriend,
    getFriends,
    postFriends
}