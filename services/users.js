function getAll () {
    return Promise.resolve('success');
};

function getUserById (id) {
    return Promise.resolve('success');
};

function createNewUser (data) {
    return Promise.resolve('success');
};

function updateUserInfo (id, data) {
    return Promise.resolve('success');
};

function deleteUser (id) {
    return Promise.resolve('success');
};

module.exports = {
    getAll,
    getUserById,
    createNewUser,
    updateUserInfo,
    deleteUser
}