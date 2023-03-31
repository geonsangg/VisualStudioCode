/*function plus(num1, num2) {
    return num1 + num2;
}
let p=plus;
console.log("두수의 합=", p(10,30));*/
const plus = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;

function calc(num1, num2, func) {
    return func(num1, num2);
}
console.log('두 수의 합 =',calc(10,20,plus));  //calc를 호출 num1 = 10 num2 = 20 func = plus를 받는다. 따라서 return plus(10,20)이 되는것
console.log('두 수의 차 =',calc(10,20,minus));