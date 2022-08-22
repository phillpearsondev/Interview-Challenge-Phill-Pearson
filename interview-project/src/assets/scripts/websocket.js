// Create WebSocket connection.
export function openTheDoor() {
    console.log('Button clicked');
}

function sendOpen() {
    message = { opendoor: [number] }
    socket.send(
        alert("{opendoor: [number]}")
    )
}

export default function establishWebSocket() {

    var socket = new WebSocket("ws://" + location.host + "/")
    var number = document.getElementById('number-test').val;


    if (socket != null) {

        socket.onmessage = function (event) {
            openTheDoor()
        }

        socket.onopen = function (e) {

            socket.send("Connection Established...")

            // Checks if the element is null, if not null, add event listener
            if (number != null) {
                PushButton.addEventListener("click", sendOpen);

            }
            // if null, throw an error
            else {
                console.log('Push Button is null')
            }
        }
        console.log(socket, socket.readyState);

    }
    else {
        console.log("socket is null");
    }
}

