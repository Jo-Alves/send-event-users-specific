const User = require("../model/user")

const user = {
    findAll: async (req, res) => {
        const users = await User.findAll()

        if (users.error)
            return res.status(500).json({ error: "OPS!!! Houve um erro no servidor. Tente novamente mais tarde." })

        res.send(users.data)
    },
    findId: async (req, res) => {
        User._id = req.params.id
        const users = await User.findId()

        if (users.error)
            return res.status(500).json({ error: "OPS!!! Houve um erro no servidor. Tente novamente mais tarde." })

        res.send(users.data)
    }
}

module.exports = user