// TO DO LIST
// ADD SHAKE AND DIE FUNCTIONALITY 
// MAKE STARTUP SHORTER
// Add game choices
let die = 0
function minigames() {
    
    basic.showString("WIN 5")
    basic.showString("SHAKE DIE")
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
        basic.showIcon(IconNames.Ghost)
        basic.clearScreen()
        basic.pause(200)
    }
    basic.showString("A 2 PLAY B 2 QUIT")
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            minigames()
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showString("BYE")
        }
        
    }
}

main()
