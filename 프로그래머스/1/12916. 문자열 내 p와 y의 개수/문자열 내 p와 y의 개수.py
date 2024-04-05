def solution(s):

    arr = list(s.upper())
    
    p = 0
    y = 0
    
    for i in arr:
        if i == "P":
            p += 1
        elif i == "Y":
            y += 1
            
    if(p == y):
        return True
    else:
        return False
            


