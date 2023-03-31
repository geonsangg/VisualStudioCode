const names = ['이영희','김철수','홍길동','손흥민','박철순'];
const sliced = names.slice(1,3); // 1번째 부터 3번째 전까지 자른다.
console.log(sliced);

const studentList = [
    {name : '홍길동', age : 50, kor : 80, eng : 70},
    {name : '김철수', age : 22, kor : 70, eng : 90},
    {name : '이영희', age : 22, kor : 90, eng : 80},
    {name : '박찬호', age : 45, kor : 60, eng : 82},
    {name : '손흥민', age : 31, kor : 77, eng : 86}
];
console.log('**영어 경시대회 참여자**');
studentList.sort((before, next) =>  next.eng - before.eng);
const student = studentList.slice(0,3);
student.forEach(students =>console.log(`이름 : ${students.name} 영어 : ${students.eng}`));
