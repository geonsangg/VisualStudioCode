$.fn.pivot=function(options) {
    //변수를 선언
    let $target = $(this);
    let $items = $target.children();
    let $container = $target.wrap('<div></div>').parent();
    let option = {
        width : 500,
        height : 450
    }
    //옵션 처리
    $.extend(option, options);
    //스타일 지정
    $target.css({
        width : $items.length * option.width,
        height : option.height,
        position : 'absolute'
    });
    $items.css({
        width : option.width,
        height : option.height,
        float : 'left'
    });
    $container.css({
        width : option.width,
        height : option.height,
        position : 'relative',
        overflow : 'hidden'
    });
    //이벤트를 연결(플러그인 동작)
    let isDown = false;
    let originLeft = 0;
    let oldLeft = 0;
    let nowPosition = 0;
    $target.on ({
        mousedown : function (event) {
            isDown = true;
            oldLeft = originLeft = event.clientX;
            event.preventDefault();
        },
        mousemove : function (event) {
            if(isDown){
                let distance = oldLeft-event.clientX;
                oldLeft = event.clientX;
                //움직임을 구현
                $target.animate({
                    left : '-=' + distance
                },0);
                $target.stop(true); //ture = clearQue
            }
            event.preventDefault();
        },
        mouseup : function (event) {
            isDown = false;
            //내부 함수 선언
            function movePosition (direction) {
                //위치를 설정
                let changePosition = nowPosition + direction;
                if(changePosition >= 0 && changePosition < $items.length) {
                    nowPosition = changePosition;
                }
            }
            // 요소의 1/4 이상 드래그 했을 때 피벗
            if(originLeft-event.clientX > option.width/4) {
                movePosition(+1);
            } else if(originLeft-event.clientX < -option.width/4) {
                movePosition(-1);
            }
            //피봇 슬라이드
            $target.animate ({
                left : -nowPosition*option.width
            },500);
            event.preventDefault();
        }
    });
    $(document).mouseup(function () {
        isDown = false;
    });
}