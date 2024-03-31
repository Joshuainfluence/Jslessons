# import time
# import os

# def clear_screen():
#     os.system('cls' if os.name == 'nt' else 'clear')

# def print_balloons():
#     print("""
#      \   /
#       \ /
#    ***** *****
#   ***************
#    ***** *****
#      *     *
# """)

# def print_cake():
#     print("""
#     |:H:a:p:p:y:|
#   __|___________|__
#  |^^^^^^^^^^^^^^^^^|
#  |:B:i:r:t:h:d:a:y:|
#  |                 |
# ~~~~~~~~~~~~~~~~~~~~~
# """)

# def happy_birthday_animation():
#     clear_screen()
#     for _ in range(2):
#         print_balloons()
#         time.sleep(0.5)
#         clear_screen()
#         time.sleep(0.5)
#     clear_screen()
#     print_cake()
#     time.sleep(2)
#     clear_screen()

# if __name__ == "__main__":
#     happy_birthday_animation()


def generate_happy_birthday_image(name):
    message = f"Happy Birthday, {name}! 🎉🎂🎈"
    border = '*' * len(message)
    
    print(border)
    print(message)
    print(border)

# Call the function with the developer's name
generate_happy_birthday_image("Developer's Name")

