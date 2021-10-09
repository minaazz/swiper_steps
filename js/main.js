
var swiper = new Swiper("#wrap", {
    navigation: {
        prevEl:".swiper-button-prev",
        nextEl:".swiper-button-next"
    },
    // 페이지네이션 등록
    pagination: {
        el: ".swiper-pagination",
        type: "fraction"
    },
    loop:true, //좌우 순환 루프
    spaceBetween:50, //패널 사이 간격
    grabCursor: true, //마우스 포인터 모양 변경
    speed:500, //패널 넘어가는 속도
})