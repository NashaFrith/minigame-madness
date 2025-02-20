from microbit import *

def minigames():
    pass


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