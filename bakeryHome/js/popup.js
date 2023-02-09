function partpopup() {
    window.open("popup.html", "", "width=450, height=450" );
}

function info() {
    /* alert(알림창) */ 
    alert("DD 베이커리 홈페이지를 찾아주셔서 고맙습니다.\n종로2가에 4호점이 오픈되었습니다.\n많이 이용해주세요!");
}
/*3초가 되면 익명함수를 호출 (익명함수= info()를 호출)*/ 
setTimeout(function () {
    info();
}, 3000);