// 변수는 상단에
// 전역변수는 최대한 줄이고 지역변수로 넣기
const noticeListA = document.querySelectorAll('#notice > li > a');
const modalShadow = document.getElementById('modal-shadow');
const button = document.getElementById('button');

/**
 * 
 * @param {String} displayStatus 
 */
function noticeClickController(displayStatus) {
    const modal = document.getElementById('modal');
    
    modal.style.display = displayStatus;
    modalShadow.style.display = displayStatus; 
} 

for(let i=0; i<noticeListA.length; i++) {
    noticeListA[i].addEventListener('click', function() {
        noticeClickController('block');
    });
}
  
button.addEventListener('click', function(){
    noticeClickController('none');
});

modalShadow.addEventListener('click', function(){
    noticeClickController('none');
}); 
 
let splide = new Splide( '.splide' , {
    type    : 'loop', 
    autoplay: true
});
splide.mount();


 