const db = require("../config/db")

class User {
    _id = 0

    async findAll() {
    try {
        const data = await db.select("*").from("users");

        return { data, error: false }
    } catch {
        return { error: true }
    }
}

    async findId() {
    try {
        const data = await db.select("*").from("users").where({ id: this._id });

        return { data, error: false }
    } catch {
        return { error: true }
    }
}
}

module.exports = new User()