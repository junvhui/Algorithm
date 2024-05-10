def solution(sizes):

    w = []
    h = []
    
    for s in sizes:
        w.append(max(s))
        h.append(min(s))
        
    return max(w) * max(h)

  # 지갑의 최대 길이, 최소 길이를 각자 나누고
  # 나눈 그룹에서 최대값들을 곱해주면 가장 큰 지갑의 크기를 구할 수 있다.