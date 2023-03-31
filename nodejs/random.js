const dice = () => Math.floor(Math.random()*6)+1;
console.log('주사위 값 =',dice());
const makeRandom = (num1, num2) => Math.floor(Math.random()*(num2-num1+1))+num1;
console.log('구간난수구하기(30~40) =',makeRandom(30,40));