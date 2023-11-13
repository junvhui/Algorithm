T = int(input())
for i in range(1, T+1):
    nums = set()
    n = int(input())
    count = 0
    while len(nums) < 10:
        count += 1
        tmp = str(n*count)
        for j in range(len(tmp)):
            nums.add(int(tmp[j]))
    print(f'#{i} {tmp}')