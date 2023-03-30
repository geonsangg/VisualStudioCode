const today = new Date();
//console.log(today.toLocaleString());
//const date1 = new Date(2023,5-1,5);
const date1 = new Date(2023,5-1,5,09,30,20);
console.log('어린이 날 행사시간 => ',date1.toLocaleString());
console.log('오늘 날짜 : %s', today.toLocaleDateString());
console.log('현재시간 : %s', today.toLocaleTimeString());
console.log('현재년도 : %s', today.getFullYear());
console.log('현재 월 : %s', today.getMonth()+1);
console.log('현재 일 : %s', today.getDate());
//today.getHours() - 시   getMinutes() 분 getSeconds() 초
let price = 8650000;
console.log(`물품의 가격은 ${price.toLocaleString()}원 입니다.`) //toLocaleString() 숫자는 3자리마다 ,를 찍어준다