from microbit import *
#TO DO LIST
#ADD SHAKE AND DIE FUNCTIONALITY 
#MAKE STARTUP SHORTER
#Add game choices
die = 0

def on_gesture_shake():
    global die
    die = randint(1,6)
    basic.show_number(die)


def minigames():
    global die
    basic.show_string("WIN 5")
    basic.show_string("SHAKE DIE")
    input.on_gesture(Gesture.SHAKE, on_gesture_shake)

    while die == 0:
        basic.pause(10)

    basic.pause(1000)
    #rock paper scissors, snake, don't look game,hop over game


def main():
    for i in range(4):
        basic.show_icon(IconNames.GHOST)
        basic.clear_screen()
        basic.pause(200)
        
    basic.show_string('A 2 PLAY B 2 QUIT')
    while True:
        if input.button_is_pressed(Button.A):
            minigames()
        elif input.button_is_pressed(Button.B):
            basic.show_string('BYE')

main()