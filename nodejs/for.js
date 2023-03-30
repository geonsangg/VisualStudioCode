const studentList = [
    {name : '김철수', kor : 80, eng : 70, mat : 86},
    {name : '이영희', kor : 90, eng : 80, mat : 72},
    {name : '홍길동', kor : 60, eng : 50, mat : 67}
];
let searchName='이동국';
let index;
for(index=0; index<studentList.length; index++) {
    if(studentList[index].name === searchName) {
        break;
    }
}
if(index == studentList.length) {
    console.log('시험명단에 없습니다.');
}else {
    console.log(`${studentList[index].name}님의 성적표`);
    console.log('국어점수 =', studentList[index].kor);
    console.log('영어점수 =', studentList[index].eng);
    console.log('수학점수 =', studentList[index].mat);
}