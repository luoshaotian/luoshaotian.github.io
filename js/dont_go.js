document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        normal_title = document.title;
        document.title = '再看看嘛~别走(／ω＼)';
    } else document.title = normal_title;
});
