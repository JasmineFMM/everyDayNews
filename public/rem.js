// 手动适配
(function (designWidth, maxWidth) {
    var doc = document,
        win = window;
    var docEl = doc.documentElement;
    var remStyle = document.createElement("style");
    //获取基准字体大小
    function refreshRem() {
        // var width = parseInt(window.screen.width); // uc有bug
        var width = docEl.getBoundingClientRect().width;
        if (!maxWidth) {
            maxWidth = 750;
        };
        if (width > maxWidth) {
            width = maxWidth;
        }
        var rem = width / designWidth * 100;
        //得到的rem基准字体大小，这里乘以100是为了适配有的浏览器不识别小数，会导致设置字体无效。
        //设置根元素html的字体大小为基准字体大小，在css中每rem就是这个值的大小。
        remStyle.innerHTML = 'html{font-size:' + rem * 2 + 'px;} ';
    }
    refreshRem();
    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        doc.write(wrap.innerHTML);
        wrap = null;
    }
    /* 以下为在不同的时机重新计算rem*/
    win.addEventListener("resize", function () {
        // clearTimeout(tid); //防止执行两次
        // tid = setTimeout(refreshRem, 50);
        refreshRem()
    }, false);

    win.addEventListener("pageshow", function (e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            refreshRem()
            // clearTimeout(tid);
            // tid = setTimeout(refreshRem,50);
        }
    }, false);
})(750, 750);
