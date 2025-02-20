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

    basic.pause(1000)
    #rock paper scissors, snake, don't look game,hop over game


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