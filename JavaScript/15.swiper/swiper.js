// DMO 트리 생성(body생성이후) DOMContetnLoaded 함수 처리
window.addEventListener('DOMContentLoaded', function(){
    createSwiper();
})

//swiper 생성
function createSwiper(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        autoplay: {
            delay : 1000
        },
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}