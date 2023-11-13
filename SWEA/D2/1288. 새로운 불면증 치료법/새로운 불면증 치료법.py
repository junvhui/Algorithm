for i in range(int(input())):
    nums = set()
    n = int(input())
    cnt = 0
    while len(nums) < 10:
        cnt += 1
        tmp = str(n * cnt)
        for j in range(len(tmp)):
            nums.add(int(tmp[j]))
    print(f'#{i + 1} {tmp}')