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

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];

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
    return res.status(200).json(friends);
}

function postFriends(req, res) {
    if(!req.body.name) {
        return res.status(400).json({
            error: "Missing friend name"
        })
    }

    const newFriend = {
        id: friends.length,
        name: req.body.name
    };

    friends.push(newFriend);

    return res.json(newFriend);
}

module.exports = {
    getFriend,
    getFriends,
    postFriends
}