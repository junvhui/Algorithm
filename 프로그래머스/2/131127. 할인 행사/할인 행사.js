function solution(want, number, discount) {

    var result = 0;
    
    discount.forEach((v, i) => {
        
        var discounts = [...discount].slice(i, i+10) 
       
        if(discounts < 10){
            return result;
        }
        
        let check = 0;
        
        for(let j = 0; j < want.length; j++){
            if([...discounts].filter((v) => v == want[j]).length === number[j]){
                check ++;
            }else{
                break;
            }
        }
        
        if(check === want.length){
            result ++;
        }
        
    })

    return result;

}