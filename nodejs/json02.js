const userList = [
    {name: '홍길동', age:50, address:'서울시 종로구'},
    {name: '김철수', age:35, address:'서울시 중구'},
    {name: '이영희', age:27, address:'서울시 강남구'}
];
const fs = require('fs'); // require('fs') =파일스트림   
fs.writeFile('./mlist.json', JSON.stringify(userList), function (error) { // 저장((경로)저장할 파일이름, 파일형태.저장할 목록, function (error){} <-에러가 날수도 있어서) 
    console.log('저장완료');
}); 