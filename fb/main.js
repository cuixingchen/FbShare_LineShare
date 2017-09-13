$(function () {
    pageObj.init();
});
var pageObj = {
    "init": function () {
        console.log("share-dialog--method--init...")
        facebookSDK.init();
        facebookSDK.bindEvents();
    }
}
var facebookSDK = {
    "init": function () {
        console.log("facebookSDK start init");
        window.fbAsyncInit = function () {
            FB.init({
                appId: '493177544378323',//http://commonst.360buyimg.com/
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