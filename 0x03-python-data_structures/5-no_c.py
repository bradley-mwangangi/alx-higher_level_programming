#!/usr/bin/python3
def no_c(my_string):
    my_string_list = list(my_string)
    for i in range(len(my_string_list)):
        if my_string_list[i] == 'C' or my_string_list[i] == 'c':
            my_string_list[i] = ''

    return "".join(my_string_list)
