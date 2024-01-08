let offset = 0; // cмещение от левого края
const sliderline = document.querySelector('.slider-line');

document.querySelector('.sliderprev').addEventListener('click', function(){
    offset +=  300;
    if (offset >  900){
        offset = 0;
    }
    sliderline.style.left = -offset + 'px';
});

document.querySelector('.slidernext').addEventListener('click', function(){
    offset -=  300;
    if (offset <  0){
        offset = 900;
    }
    sliderline.style.left = -offset + 'px';
});



