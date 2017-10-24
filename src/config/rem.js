(function(doc, win) {
    let docEl = document.documentElement,
        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
        recl = function() {
            let clientWidth = docEl.clientWidth
            if (!clientWidth) return
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
        };
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recl, false)
    doc.addEventListener('DOMContentLoaded', recl, false)
})(document, window)