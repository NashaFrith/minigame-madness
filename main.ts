function minigames() {
    
}

function main() {
    for (let i = 0; i < 4; i++) {
        basic.showIcon(IconNames.Ghost)
        basic.clearScreen()
        basic.pause(200)
    }
    basic.showString("A 4 GAMES, B TO QUIT")
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            minigames()
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showString("BYE")
        }
        
    }
}

main()
