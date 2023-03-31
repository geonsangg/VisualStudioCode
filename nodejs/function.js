/*function hello() {
    console.log('안녕하세요');
}*/
/*const hello = function () {
    console.log('안녕하세요');
}*/
/*const hello = () => {  // (매개편수)가 먼저 나오고 => (화살표가 function 이라고 생각하면 편함)
    console.log('안녕하세요');
}*/
const hello = () => console.log('안녕하세요'); // 수행할게 한 줄이면 {} 생략 가능

hello();

/*function sum (a,b) {
    return a+b;
}*/
const sum = (a,b) => a+b;  //return 도 생략 가능

let result = sum(10,20)*5;
console.log(result);

const sumAndPrint = (num1, num2) => {
    const result = num1 + num2;
    return `두 수의 합은 ${result}입니다.`;
}

console.log(sumAndPrint(45,30));