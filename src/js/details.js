let oBigBox = document.getElementById("box");
let oSmallPic = document.querySelector('.small_pic');
let oMark = document.querySelector('.mark');
let oFloat = document.querySelector('.float_layer');
let oBigPic = document.querySelector('.big_pic');
let oBigImg = document.querySelector('.big_pic img'); 
oMark.onmouseenter = function(){
    oFloat.style.display = 'block';
    oBigPic.style.display = 'block';
}
oMark.onmouseleave = function(){
    oFloat.style.display = 'none';
    oBigPic.style.display = 'none';
}
oMark.onmousemove = function(evt){
    let e = evt || window.event;
    let left = e.pageX - oBigBox.offsetLeft - oSmallPic.offsetLeft - oFloat.offsetWidth / 2;
    let top = e.pageY - oBigBox.offsetTop - oSmallPic.offsetTop - oFloat.offsetHeight / 2;
    //边界
    if(left <= 0){
        left = 0;
    }else if(left >= oMark.offsetWidth - oFloat.offsetWidth){
        left = oMark.offsetWidth - oFloat.offsetWidth;
    }
    if(top <= 0){
        top = 0;
    }else if(top >= oMark.offsetHeight - oFloat.offsetHeight){
        top = oMark.offsetHeight - oFloat.offsetHeight;
    }
    oFloat.style.left = left + 'px';
    oFloat.style.top = top + 'px';
    
    //滑块在遮罩上的移动比例(当前所在位置 / （遮罩的宽 - 滑块的宽）)
    let pX = left / (oMark.offsetWidth - oFloat.offsetWidth);
    let pY = top / (oMark.offsetHeight - oFloat.offsetHeight);
    
    //控制大图显示
    oBigImg.style.left = - pX * (oBigImg.offsetWidth - oBigPic.offsetWidth) + 'px';
    oBigImg.style.top = - pY * (oBigImg.offsetHeight - oBigPic.offsetHeight) + 'px';
}
