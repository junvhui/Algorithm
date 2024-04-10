def solution(s):
    
    if len(s) == 4 or len(s) == 6:
        answer = True
    else:
        return False
        
    return s.isdigit()