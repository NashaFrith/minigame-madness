// TO DO LIST
// ADD SHAKE AND DIE FUNCTIONALITY 
// MAKE STARTUP SHORTER
// Add game choices
let die = 0
function on_logo_event_pressed() {
    
}

function minigames() {
    
    basic.pause(200)
    basic.clearScreen()
    basic.showString(" SHAKE ")
    input.onGesture(Gesture.Shake, function on_gesture_shake() {
        
        die = randint(1, 6)
        basic.showNumber(die)
    })
    while (die == 0) {
        basic.pause(10)
    }
    basic.pause(1000)
}

// rock paper scissors, snake, don't look game,hop over game
function main() {
    for (let i = 0; i < 4; i++) {
        // add music
        basic.showIcon(IconNames.Ghost)
        basic.clearScreen()
        basic.pause(200)
        basic.showArrow(ArrowNames.North)
    }
    while (true) {
        if (input.logoIsPressed()) {
            minigames()
        }
        
    }
}

main()
