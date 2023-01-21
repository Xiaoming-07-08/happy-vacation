// 秒杀倒计时
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var inputTime = +new Date('2021-12-21 17:00:00');
countDown();
setInterval(countDown, 1000);

function countDown() {
    var nowTime = +new Date();
    var times = (inputTime - nowTime) / 1000;
    var h = parseInt(times / 60 / 60 % 60);
    h = h < 10 ? '0' + h : h;
    hours.innerHTML = h;
    var m = parseInt(times / 60 / 60 % 60);
    m = m < 10 ? '0' + m : m;
    minutes.innerHTML = m;
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    seconds.innerHTML = s;
}

// 微信
var wei = document.querySelector('.wei');
var ma = document.querySelector('.ma');
wei.onmouseover = function() {
    ma.style.display = 'block';
}
wei.onmouseout = function() {
    ma.style.display = 'none';
}