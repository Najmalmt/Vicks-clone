function changeBg(){
    var header = document.getElementsByClassName('navbar')[0];

    var srollvalue = window.scrollY;
    if(srollvalue < 70){
        header.classList.remove('bgColor');
    }else {
        header.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg)