T = int(input())

for tc in range(1, T+1):
    n = input()
    grades = list(map(int, input().split()))
    score = [0] * 101
    most = 0
    for grade in grades:
        score[grade] += 1
        if score[grade] >= score[most]:
            most = grade
    
    print("#{} {}".format(tc, most))