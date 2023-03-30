let na = '홍길동';
let age = 25;
// `` <- backtick 기호(1옆에 있는거) 사용하면 연결연산자 없이 할 수있다 ${변수}
let result = `${na}의 나이는 ${age}세 입니다.`;
console.log(result);
let num = 20;
num = 50;
console.log(num);
const pi = 3.14; // const - 값을 바꿀 수 없음
console.log(pi);
const str1='10';
const str2='20';
console.log('두 문자 더하기=%s',str1 + str2); // %s = ,뒤에 값을 s에 넣는다. s(string)
const num1 = 10;
const num2 = 20;
console.log('두 숫자의 합=%d', num1+num2); //  %d = ,뒤에 값을 d에 넣는다. d(숫자 데시말)
console.log('혼합 더하기=%s',str1+num2); //숫자,문자를 더할땐 문자가 우선이기에 타입은 s를 넣어야한다
const arrnum = [10,20,30];
console.log(arrnum[0]);