let cyan = {};
cyan.showRightMenu = function (isTrue, x = 0, y = 0) {
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top', x + 'px').css('left', y + 'px');

    if (isTrue) {
        $rightMenu.show();
    } else {
        $rightMenu.hide();
    }
}
// 右键菜单事件
if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    window.oncontextmenu = function (event) {
        $('.rightMenu-group.hide').hide();
        if (document.getSelection().toString()) {
            $('#menu-tools').show();
        }
        if (event.ctrlKey) return true;
        if (localStorage.getItem("right_menu_switch") === 'off') return true
        let pageX = event.clientX + 10;
        let pageY = event.clientY;
        let rmWidth = $('#rightMenu').width();
        let rmHeight = $('#rightMenu').height();
        if (pageX + rmWidth > window.innerWidth) {
            pageX -= rmWidth + 10;
        }
        if (pageY + rmHeight > window.innerHeight) {
            pageY -= pageY + rmHeight - window.innerHeight;
        }



        cyan.showRightMenu(true, pageY, pageX);
        return false;
    };

    window.addEventListener('click', function () { cyan.showRightMenu(false); });
}