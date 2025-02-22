let die = 0
// classic snake game
function snake() {
    
}

// tilt in the opposite direction of the arrow
function dontLook() {
    
}

// tilt to catch the falling object
function catch_() {
    
}

// yell to jump over the stuff
function jumpMan() {
    
}

// press the buttons quickly (include misdirection)
function mole() {
    
}

// navigate through maze
function maze() {
    
}

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
    basic.pause(500)
    if (die == 1) {
        snake()
    } else if (die == 2) {
        dontLook()
    } else if (die == 3) {
        catch_()
    } else if (die == 4) {
        jumpMan()
    } else if (die == 5) {
        mole()
    } else if (die == 6) {
        maze()
    } else {
        basic.showIcon(IconNames.Sad)
    }
    
}

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
