def solution(price, money, count):
    
    
    result = 0
    
    for i in range(0, count+1):
        result += price * i    

    if result <= money:
        return 0
    else:
        return result - money