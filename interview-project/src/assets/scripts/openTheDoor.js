import sendOpen from '@/assets/scripts/websocket'
import establishWebSocket from '@/assets/scripts/websocket'

// Open the door

// The function that is called once the button is pressed
function openTheDoor() {
    console.log('Button clicked');
}

export function setClickEventToButton() {
    // grab the button element from the DOM
    var PushButton = document.getElementById('push-button');


    // Checks if the element is null, if not null, add event listener
    if (PushButton != null) {
        PushButton.addEventListener("click", sendOpen);

    }
    // if null, throw an error
    else {
        console.log('Push Button is null')
    }
};