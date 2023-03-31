const str1='<h1>안녕하세요</h1>';
//const result1 = str1.replace('<h1>','').replace('</h1>','');
const result1 = str1.replace(/<h1>/g,'').replace(/<\/h1>/g,''); //   정규표현식 /~/g  g-문자 전체
console.log(result1);

const str2="<h1>특별가 - </h1><h2>55,000원</h2>";    // . = 모든 문자
const result2 = str2.replace(/<..>/g, "").replace(/<...>/g,"");  // <..> = <로시작해서 2글자 나오고 > 로 끝나는것
console.log(result2);

const str3="<div>특별가 - <h2>55,000원</h2></div>";
//const result3 = str3.replace(/<.{0,1}h2>/g,"");  // <로 시작해서 0~1문자 나오고 h2>로 끝나는것
const result3 = str3.replace(/<.{0,4}>/g,""); // <로 시작해서 0~4문자가 나오고 > 로 끝나는것
console.log(result3);

const str4 = "/정상가/ - 30000원(특별,할인가 - 23000원)";
const result4 = str4.replace(/[\/()\-,]/g,""); // [] 묶을때 \/ = /를 찾을때 \- = -를 찾을때 즉 / ( ) - , 를 찾는다
console.log(result4);

const text = "hello my name is gildong";
const matched = text.match(/[a-l]{1,3}/g); // a 부터 l 까지 1~3개를 분리
console.log(matched);