var facebookSDK = {
    "init": function () {
        console.log("facebookSDK start init");
        window.fbAsyncInit = function () {
            FB.init({
                appId: '171324200083999',
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
    "share":function (url,ft) {
        FB.ui(
            {
                method: 'share',
                href: url,
            },
            // callback
            function (response) {
                ft(response);
            }
        );
    }
}