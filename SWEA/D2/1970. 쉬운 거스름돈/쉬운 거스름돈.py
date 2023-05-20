T = int(input())
for test_case in range(1, T + 1):
	N = int(input())
    
	money = [50000, 10000, 5000, 1000, 500, 100, 50, 10]
	answer = [0, 0, 0, 0, 0, 0, 0, 0]
    
	for i in range(len(money)):
		if N // money[i] !=0:
			answer[i] = N // money[i]
			N = N % money[i]
			
          
	print(f'#{test_case}')
	print(*answer)