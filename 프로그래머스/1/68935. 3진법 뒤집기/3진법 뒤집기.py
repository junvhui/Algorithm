def solution(n):
    answer = 0
    arr = ""
    
    while n > 0:
        arr += str(n % 3)
        n //= 3
        
    for digit in range(len(arr)):
        answer += int(arr[digit]) * (3 ** (len(arr) - (digit + 1)))
        
    return answer