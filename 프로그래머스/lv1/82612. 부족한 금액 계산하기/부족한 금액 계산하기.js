function solution(price, money, count) {
    
    var money_sum = 0;
    for(let i = 1; i <= count; i++){
        money_sum += price * i;
    }
    if(money_sum > money){
        return money_sum - money;
    }else{
        return 0;
    }
}