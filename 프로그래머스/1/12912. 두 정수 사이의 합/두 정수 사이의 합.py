def solution(a, b):
    
    if a > b:
        x = b
        y = a
    else:
        x = a
        y = b
    
    sum = 0
    for i in range(x, y+1):
        sum += i
    return sum