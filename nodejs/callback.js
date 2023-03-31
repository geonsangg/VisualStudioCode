//합을 구하는 함수
const sum = (num1, num2) => num1 + num2;
//결과를 출력하는 함수
const printResult = result => console.log(`결과는 ${result}입니다.`);
//합을 구하고 결과를 출력하는 함수
const sumAndPrint = (calcResult, callback) => callback(calcResult);

sumAndPrint(sum(20,30),printResult);
/* calcResult = 50 (sum(20,30))
   callback = printReuslt(50);

    callback(calcResult) - calcResult를 먼저 수행해서 return받은 값을 callback이 수행하고 return한다.
   */
