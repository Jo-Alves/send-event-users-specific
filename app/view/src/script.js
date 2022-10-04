const url = "http://localhost:3000"
const $tbody = document.querySelector("table tbody")
const $message = document.querySelector("#message")

var userId = prompt("Digite o ID do usuário");

var socket_io = io(url);
socket_io.emit("connected", userId);

socket_io.on("messageReceived", message => {
    $message.innerHTML += `
        <li>${message}</li>
    `
})

async function findAllUser() {
    axios.get(`${url}/user`).then(response => {
        response.data.forEach(({ id, name }) => {
            $tbody.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>
                    <button id="btn-send-id-${id}" value-id="${id} tabIndex="${id}">Send Message</button>
                </td>
            </tr>
            `
            document.querySelectorAll(`button`).forEach(btn => {
                btn.addEventListener("click", () => {
                    let message = prompt("Digite a mensagem")

                    if (!message) {
                        alert("Digite uma mensagem")
                        return message = prompt("Digite a mensagem")
                    }

                    socket_io.emit("sendEvent", {
                        myId: userId,
                        userId: btn.getAttribute("value-id"),
                        message
                    })
                })
            })
        })
    }).catch(error => {
        console.log(error)
    })
}

findAllUser()