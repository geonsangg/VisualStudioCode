const studentList = [
    {name : '김철수', kor : 80, eng : 70, mat : 86},
    {name : '이영희', kor : 90, eng : 80, mat : 72},
    {name : '홍길동', kor : 60, eng : 50, mat : 67}
];
let searchName='이영희';
let stu;
studentList.forEach(function (student) {
    if(student.name === searchName) {
        stu=student;
    }
});
if(stu == undefined) {
    console.log('시험명단에 없습니다.');
}else {
    console.log(`${stu.name}님의 성적표`);
    console.log('국어점수 =', stu.kor);
    console.log('영어점수 =', stu.eng);
    console.log('수학점수 =', stu.mat);
}