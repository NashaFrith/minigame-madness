from microbit import *

die = 0

#classic snake game
def snake():
    pass

#tilt in the opposite direction of the arrow
def dontLook():
    pass

#tilt to catch the falling object
def catch():
    pass

#yell to jump over the stuff
def jumpMan():
    pass

#press the buttons quickly (include misdirection)
def mole():
    pass

#navigate through maze
def maze():
    pass

def on_gesture_shake():
    global die
    die = randint(1,6)
    basic.show_number(die)

def on_logo_event_pressed():
    pass

def minigames():
    global die
    basic.pause(200)
    basic.clear_screen()
    basic.show_string(" SHAKE ")
    input.on_gesture(Gesture.SHAKE, on_gesture_shake)

    while die == 0:
        basic.pause(10)

    basic.pause(500)
    if die == 1:
        snake()
    elif die == 2:
        dontLook()
    elif die == 3:
        catch()
    elif die == 4:
        jumpMan()
    elif die == 5:
        mole()
    elif die == 6:
        maze()
    else:
        basic.show_icon(IconNames.SAD)


def main():
    for i in range(4):
        #add music
        basic.show_icon(IconNames.GHOST)
        basic.clear_screen()
        basic.pause(200)
        basic.show_arrow(ArrowNames.NORTH)

    while True:
        if input.logo_is_pressed():
            minigames()
               

main()