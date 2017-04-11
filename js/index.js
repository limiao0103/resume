~function () {
    var winW = document.documentElement.clientWidth;
    var desW = 640;
    var htmlFont = winW / desW * 100;
    if (winW >= desW) {
        $('.musicBox').css({
            winth: desW,
            margin: '0 auto'
        });
        window.htmlFont = 100;
        return;
    }
    window.htmlFont = htmlFont;
    document.documentElement.style.fontSize = htmlFont + "px";
}();