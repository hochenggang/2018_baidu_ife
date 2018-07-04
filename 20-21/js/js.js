// 设置透明
var fade_obj = document.getElementById('fade-obj');
var fade_btn = document.getElementById('fade-btn');
var x = 1;
var y = 0;
fade_btn.addEventListener('click',function(){
    fade_btn.setAttribute('disabled','disabled'); 
    if(fade_btn.innerHTML==='淡出'){
        console.log(fade_btn.innerHTML);
        start_fade();
    }else if(fade_btn.innerHTML==='淡入'){
        console.log(fade_btn.innerHTML);
        end_fade();
    }else{
        console.log(fade_btn.innerHTML);
    }
    },false);
function start_fade(){
    fade_obj.style.opacity = x;
    x = (x - 0.1).toFixed(1);
    console.log('x:'+x);
    if (x >= 0){
        setTimeout(start_fade, 100);
    }
    if (x < 0){
        fade_btn.removeAttribute('disabled');
        fade_btn.innerHTML = '淡入';
        x = 1;
    }   
}
function end_fade(){
    fade_obj.style.opacity = y;
    y = (Number(y) + 0.1).toFixed(2);
    console.log('y:'+y);
    if (y <= 1){
        setTimeout(end_fade, 100);
    }
    if (y > 1){
        fade_btn.removeAttribute('disabled');
        fade_btn.innerHTML = '淡出';
        y = 0;
    }   
}

// 设置定格动画 8160 480,共17帧。
var pic_obj = document.getElementById('pic-box');
var start_height = 480;
var end_height = 8160;
window.addEventListener('load',start_pic,false);

//background-position: 0px -480px;
control = 1;
function start_pic(){
    var style = '0px ' + '-'+ start_height +'px';
    //console.log(style);
    pic_obj.style.backgroundPosition = style;
    if(control===1){
        start_height = start_height + 480;
    }else{
        start_height = start_height - 480;
    }
    if (start_height >= 8160){
        start_height = 7680;
        control = 0;
    }
    if (start_height <= 480){
        start_height = 480;
        control = 1;
    }
    setTimeout(start_pic,100);
}