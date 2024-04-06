def solution(x):
    List = list(str(x))
    sum = 0
    
    for i in range(0, len(List)):
        sum += int(List[i])
        
    if x % sum == 0:
        return True
    else:
        return False
