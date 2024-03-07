const { v4: uuid, validate: uuidValidate } = require('uuid');

function generateId() {
    return uuid();
}

function verifyId(id) {
    return uuidValidate(id);
}

module.exports = { generateId, verifyId };