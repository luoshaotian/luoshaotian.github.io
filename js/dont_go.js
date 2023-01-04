var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '再看看嘛~别走(／ω＼)~' + OriginTitile;
            clearTimeout(titleTime);
        }
        else {
            document.title = '(≧∇≦)ﾉ欢迎回来~~' + OriginTitile;
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            }, 4000);
        }
    });
