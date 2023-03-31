const studentList = [
    {name : '김철수', kor : 80, eng : 70, mat : 86},
    {name : '이영희', kor : 90, eng : 80, mat : 72},
    {name : '홍길동', kor : 60, eng : 50, mat : 67}
];

/*for (const student of studentList) {
    let sum = student.kor + student.eng + student.mat;
    console.log(`${student.name}님의 총점 : ${sum}`);
}*/
//총점을 구하는 화살표 함수
const total = (k, e, m) => k+e+m;

//forEach 이용해 각 성적출력
studentList.forEach(student => console.log(`${student.name}님의 총점 : ${total(student.kor,student.eng,student.mat)}`));

