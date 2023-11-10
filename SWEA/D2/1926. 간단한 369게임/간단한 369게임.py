N = int(input())
for num in range(1, N+1):
    temp = num
    count = 0
    while temp > 0:
        if temp % 10 in [3, 6, 9]:
            count += 1
            
        temp //= 10
    
    if count > 0:
        print("-"*count, end=" ")
    else:
        print(num, end=" ")

