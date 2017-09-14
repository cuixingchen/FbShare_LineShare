$(function () {
    var param=pageObj.getParameter("title");
    alert(param);
    pageObj.title=param;
    $("meta[property='og:title']").attr('content',param);
    pageObj.init();
});
var pageObj = {
    "title":"",
    "init": function () {
        console.log("share-dialog--method--init...")
        facebookSDK.init();
        facebookSDK.bindEvents();
    },
    "getParameter": function (param) {
        var query = window.location.search;
        var iLen = param.length;
        var iStart = query.indexOf(param);
        if (iStart == -1)
            return "";
        iStart += iLen + 1;
        var iEnd = query.indexOf("&", iStart);
        if (iEnd == -1)
            return query.substring(iStart);
        return query.substring(iStart, iEnd);
    }
}
var facebookSDK = {
    "init": function () {
        console.log("facebookSDK start init");
        window.fbAsyncInit = function () {
            FB.init({
                appId: '171324200083999',//http://commonst.360buyimg.com/
                autoLogAppEvents: false,
                xfbml: true,
                version: 'v2.10'
            });
            // FB.AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },
    "bindEvents": function () {
        $("#share-dialog-sign").on("click", function () {
            var url = $("#share-dialog-sign").nextAll("input").val();
            if (!url || url == null || url == "") {
                alert("分享地址不能为空");
                return;
            }
            url+="?title="+encodeURIComponent('我的title是:'+pageObj.title);
            FB.ui(
                {
                    method: 'share',
                    href: url,
                },
                // callback
                function (response) {
                    if (response && !response.error_message) {
                        alert('Posting completed.');
                    } else {
                        alert('Error while posting.');
                    }
                }
            );
        });
    }
}