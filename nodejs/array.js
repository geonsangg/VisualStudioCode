const nums = [10,20,30,40,50];
nums.reverse(); //reverse() = 배열을 역순으로 바꿈
console.log(nums);
const names = ['이영희','김철수','홍길동','손흥민','박철순'];
//names.reverse();
console.log(names.sort()); //sort() 작은것부터 정렬
const scores = [85,96,70,88,60];
const sortScores = scores.sort();
console.log('오름차순 정렬 = ',sortScores);
console.log('내림차순 정렬 = ',sortScores.reverse());