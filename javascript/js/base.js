window.onload = function () {
    var output="";
    var date=new Date();
    var hour=date.getHours();
    if(hour > 16) {
        output += "<ul>";
        output += "<li>후라이드 치킨</li>";
        output += "<li>양념 치킨</li>";
        output += "<li>골뱅이 무침</li>";
        output += "<li>어묵탕</li>";
        output += "</ul>";
    }else {
        output += "<ul>";
        output += "<li>김치찌개</li>";
        output += "<li>된장찌개</li>";
        output += "<li>순두부찌개</li>";
        output += "<li>비빔밥</li>";
        output += "</ul>";
    }
    document.body.innerHTML += output;
}