months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

T = int(input())
for test_case in range(1, T + 1):
    m1, d1, m2, d2 = map(int, input().split())
    answer = 0
    
    if m1 == m2:
        answer = d2 - d1 + 1
    
    else:
        answer = months[m1] - d1 + 1
        
        for i in range(m1 + 1, m2):
            answer += months[i]
        
        answer += d2
    
    print(f'#{test_case} {answer}')
