$(document).ready(function(){
    //슬라이드 li
    var $slide = $('.slide').children('li');
    //현재 숫자
    var $index = 0;
    //슬라이드 하단 점
    var $dotli = $('.dot>li');
    //setInterval()을 사용하기 위한 변수
    var auto;
    //$slide의 길이 = 3
    var slidelength = 0;

    //초기화
    function init() {
        $index = $('.dot>li.on').index();
        slidelength = $dotli.length;
    }
    //슬라이드 이벤트 묶음
    function slideEvent() {
        //하단 버튼을 클릭했을 경우
        $dotli.click(function(){
            // $index 에 $dotli>.on의 순서(숫자)를 대입한다.
            $index = $(this).index();
            //fadeMove 함수 실행
            fadeMove();
        });
        //오른쪽 버튼을 클릭하면
        $('.right_btn').click(function(){
            //nextChkPlay 함수 실행
            nextChkPlay();
        });
        //왼쪽 버튼을 클릭하면
        $('.left_btn').click(function(){
            //prevChkPlay 함수 실행
            prevChkPlay();
        });
        //setInterval 함수를 사용한 자동 슬라이드
        autoPlay();
        //setInterval 함수 멈추기
        autoPlayStop();
        //setInterval 함수 멈춘다음 다시 실행하기
        autoPlayRestart();
    }
    //fadeIn 효과처럼 나타내는 함수
    function fadeMove(){
        //$slide에 li(현재숫자)번째,에니메이션, 2초 동안 opacity 실행
        $slide.eq($index).stop().animate({
            "opacity":1
            //그외 나머지 li는 opacity 0으로 설정
        },1000).siblings().animate({
            "opacity":0
        },1000);
        //$dotli에 있는 on이라는 클래스 모두 제거
        $dotli.removeClass('on');
        //$dotli li(현재숫자)에 on 클래스 생성
        $dotli.eq($index).addClass('on');
    }
    //우측방향으로 넘기는 함수
    function nextChkPlay(){
        //$index의 값이 2(3-1=2)일 경우
        if($index == slidelength-1){
            //$index 0으로 설정(초기로 돌리기)
            $index = 0;
            //$index의 값이 2가 아닐경우
        }else{
            //$index의 값 1상승
            $index++;
        }
        //if else문이 끝난 뒤 페이드 효과 적용
        fadeMove();
    }
    //좌측방향으로 넘기는 함수
    function prevChkPlay(){
        //$index의 값이 0이라면
        if($index == 0){
            //$index에 2라는 값을 대입
            $index = slidelength -1;
            //0이 아니라면
        }else{
            //$index 값 1 감소
            $index--;
        }
        //if else문이 끝난뒤 페이드 효과
        fadeMove();
    }
    //자동으로 넘겨주는 함수
    function autoPlay(){
        //auto 라는 변수에 nextChkPlay를 6초마다 반복하는 setInerval 함수 실행
        auto = setInterval(function(){
            nextChkPlay();
        },5000);
    }
    //자동함수 멈추는 함수
    function autoPlayStop(){
        //.slide에 마우스를 올렸을 경우
        $('#section1 a').mouseenter(function(){
            //auto라는 변수의 setInterval함수 정지
            clearInterval(auto);
        });
    }
    //자동 함수 다시 실행시켜주는 함수
    function autoPlayRestart(){
        //.slide에 마우스를 땔 경우
        $('#section1 a').mouseleave(function(){
            //auto 라는 변수에 nextChkPlay를 6초마다 반복하는 setInterval 함수 실행
            auto = setInterval(function() {
                nextChkPlay();
            },5000)
        })
    }
    //초기화 함수 실행
    init();

    //슬라이드 묶음 이벤트 함수 실행
    slideEvent();
});
