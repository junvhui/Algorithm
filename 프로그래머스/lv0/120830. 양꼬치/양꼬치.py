def solution(n, k):

    price = n * 12000
    
    if n >= 10:
        drink = (k - n // 10) * 2000
    else:
        drink = k * 2000
    
    return price + drink