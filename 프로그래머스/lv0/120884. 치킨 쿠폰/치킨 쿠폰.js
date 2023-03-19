function solution(chicken) {
    let coupon = chicken;
    let service = 0;
    
    while(coupon >=10) {
          service += parseInt(coupon / 10) //쿠폰을 10으로 나눈 수 만큼 서비스 치킨 추가
          coupon = parseInt(coupon % 10) + parseInt(coupon / 10)
          }
    return service;
}