T = int(input())
for test_case in range(1, T + 1):
	n = int(input())
	arr = ''
	for _ in range(n):
		alpha, num = input().split()
		arr += alpha * int(num)
        
	print(f'#{test_case}')
    
	for i in range(0, len(arr), 10):
		print(arr[i:i+10])
        