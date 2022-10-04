const express = require("express")
const cors = require("cors")
const path = require("path")
const axios = require("axios")
const userRouter = require("./app/router/user_router")
const url = "http://localhost:3000/user"

const app = express();
const http = require("http")
const socketIO = require("socket.io")

const server = http.createServer(app)
const io = socketIO(server, {
    cors: "*"
})

const users = []

io.on("connection", socket => {
    socket.on("connected", userId => {
        users[userId] = socket.id
    })

    socket.on("sendEvent", async data => {
        const receiver = await axios.get(`${url}/${data.userId}`)
        if (receiver.data.length > 0) {
            const sender = await axios.get(`${url}/${data.myId}`)
            let name = sender.data[0].name
            let message = `Nova mensagem recebida do ${name}. Mensagem : ${data.message}`
            io.to(users[receiver.data[0].id]).emit("messageReceived", message)
        }
    })
})

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("./app/view"))
app.use("/user", userRouter)

server.listen(3000, () => {
    console.log("Servidor rodando...")
})