const date = new Date();
const dateToTimestamp = date.getTime();
console.log('오늘 날짜의 타임스탬프 : ', dateToTimestamp);
const timestampToDate = new Date(1680248076416);
console.log('오늘은',timestampToDate);
const timestampToInit = new Date(1); //1 = 1970년에서 1/1000초 지난 시간
console.log('타임스탬프 초기 날짜 : ',timestampToInit);