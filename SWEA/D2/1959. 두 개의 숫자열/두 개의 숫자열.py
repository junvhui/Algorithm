T = int(input())

for tc in range(1, T+1):

    N, M = map(int, input().split())
    A = list(map(int, input().split()))
    B = list(map(int, input().split()))

    if len(A) < len(B): # 길이가 작은 리스트와 큰 리스트를 구별
        min_lst = A
        max_lst = B
    else:
        min_lst = B
        max_lst = A

    repeat = len(max_lst) - len(min_lst) + 1 # 반복 횟수
    answer = 0

    for i in range(repeat): # 0 1 2 3
        tmp = 0
        for j in range(len(min_lst)): # 길이가 큰 리스트는 인덱스를 늘려가면서 계산 진행 #0, 1, 2
            tmp += (min_lst[j] * max_lst[j+i])
        answer = max(answer, tmp)

    print(f"#{tc} {answer}")