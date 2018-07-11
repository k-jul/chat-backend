function getAll () {
    return Promise.resolve('success');
};

function getMessageById (id) {
    return Promise.resolve('success');
};

function createMessage (data) {
    return Promise.resolve('success');
};

function updateMessage (id, data) {
    return Promise.resolve('success');
};

function deleteMessage (id) {
    return Promise.resolve('success');
};

module.exports = {
    getAll,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage
}