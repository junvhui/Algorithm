def solution(seoul):
    
    result = 0
    
    for i in range(0, len(seoul)):
        if seoul[i] == "Kim":
            return "김서방은 " + str(i) +"에 있다"