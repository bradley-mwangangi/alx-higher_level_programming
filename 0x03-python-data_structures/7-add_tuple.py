#!/usr/bin/python3
def add_tuple(tuple_a=(), tuple_b=()):
    new_tuple = ()

    max_len = max(len(tuple_a), len(tuple_b))

    for i in range(max_len):
        a = tuple_a[i] if i < len(tuple_a) else 0
        b = tuple_b[i] if i < len(tuple_b) else 0
        new_tuple += (a + b,)

    return new_tuple
