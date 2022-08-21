// Create WebSocket connection.

export default function establishWebSocket() {

    let socket = new WebSocket("ws://" + location.host + "/")

    if (socket != null) {

        socket.onopen = function () {

            socket.send("Connection Established...");
        }
        console.log(socket, socket.readyState, socket.onopen);

    }
    else {
        console.log("socket is null");
    }
}

