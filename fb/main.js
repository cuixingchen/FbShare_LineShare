window.onload = function(){
    facebookSDK.init();
    pageObj.init();
};
var pageObj = {
    "init": function () {
        console.log("绑定事件")
        document.getElementById("share-dialog-sign").onclick = function(){
            var url=document.getElementById("share-dialog-sign-url").value();
            var pin=document.getElementById("share-dialog-sign-pin").value();
            url+="?pin="+encodeURIComponent(pin);
            facebookSDK.share(url,function (response) {
                if (response && !response.error_message) {
                    alert('Posting completed.');
                } else {
                    alert('Error while posting.');
                }
            });
        }
    }
}