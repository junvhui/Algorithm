T = int(input())

for tc in range(1, T+1):

    N, K = map(int, input().split())
    rank = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D0'] # 평점
    grade = [] # 학생들 총점과 번호

    for num in range(1, N+1):
        mid, final, report = map(int, input().split())
        all_grade = (mid * 0.35) + (final * 0.45) + (report * 0.2)
        grade.append((all_grade, num)) # 학생들의 총점과 번호를 추가

    grade.sort(reverse=True) # 총점 순으로 내림차순 정렬

    quotient = N // 10
    for i in range(N):
        if grade[i][1] == K: # 학생의 번호와 일치하면

            idx = i // quotient # 로직에 의해 평점 부여(로직은 글로 써보면 공식이 나옴)
            answer = rank[idx]

    print(f"#{tc}", answer)
        