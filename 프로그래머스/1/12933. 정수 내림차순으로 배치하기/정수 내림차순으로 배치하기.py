def solution(n):
    List = list(str(n))
    List.sort(reverse = True)     
    answer = int("".join(List))
    return answer