N = int(input())

result = ''
count = 0

for test_case in range(1, N + 1):
    a = list(str(test_case))
    for i in a:
        if int(i) % 3 == 0 and int(i) != 0:
            count += 1
            
    if(count==0):
        result += str(test_case)
    else:
        for i in range(count):
            result += '-'
            count = 0
            
    result += ' '
            
print(result)