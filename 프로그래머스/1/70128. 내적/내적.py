def solution(a, b):
    
    result = 0
    
    for i in range(0, len(a)):
        result += a[i] * b[i]    
    
    return result