
var swiper = new Swiper("#wrap", {
    navigation: {
        prevEl:".swiper-button-prev",
        nextEl:".swiper-button-next"
    },
    // 페이지네이션 등록
    pagination: {
        el: ".swiper-pagination",
        type: "bullets", //fraction(순서확인), bullets(클릭버튼)
        clickable:true, //클릭가능하게 변경
    },
    loop:true, //좌우 순환 루프
    spaceBetween:50, //패널 사이 간격
    grabCursor: true, //마우스 포인터 모양 변경
    speed:500, //패널 넘어가는 속도
    slidesPerView:"auto", //한 화면에 보일 패널의 갯수 ("auto":지정한 넓이적용)
    centeredSlides:true, //현재 활성화 패널을 항상 가로 가운데 고정
    effect:"coverflow",
    coverflowEffect: {
        rotate:50, //세로축회전각도
        slideShadows:false, //옆면그림자
        depth:400, //3d 요소의 왜곡률
        stretch:-100 //양수면 패널들이 당겨짐, 음수일수록 반대로 멀어짐

    }
})