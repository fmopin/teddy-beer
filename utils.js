module.exports.denormalizeMoney = function(data) {
    return (Math.round(data * 100) / 100).toFixed(2);
};

module.exports.chatfuelSendMessages = function(res, text) {
    res.send({
        "messages": [
            {"text": text}
        ]
    });
};
