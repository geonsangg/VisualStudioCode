const str = "computer";
const repStr = str.replace("pu","ab");
console.log(repStr);
const str2 = "(hello)";
const repStr2 = str2.replace("(","{").replace(")","}");
console.log(repStr2);
const dateString = "2023-03-31T18:10:20";
const repDate = dateString.replace('T',' ');
console.log(repDate);
const names = '홍길동,이영희,김철수';
const name = names.split(',');
console.log(name);
const na = 'korea';
const str3 = na.split('r');
console.log(str3);
const date = repDate.split(' ')[0]; //0번째 방만
const time = repDate.split(' ')[1]; //1번째 방만
console.log('오늘 날짜=%s',date);
console.log('현재 시간=%s',time);