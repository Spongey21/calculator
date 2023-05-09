function Calculate takes array, if run
    return evaluate the math string

calculator element add event submit
    prevent default

loop numbers
    num add event click
        equation value add target text

loop operators
    operator add event click
        if last equation character is a num
            equation add target text

equal add event click
    if result is greater or equal to 3
        equation add Calculate function with equation string

comma add event click
    equation.value add comma

clear add event click
    equation is emptied

document add event keyup
    if key is num or operator *, - or +
        add value to equation