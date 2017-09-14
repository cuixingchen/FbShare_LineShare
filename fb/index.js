window.onload = function(){
    facebookSDK.init();
    var param=pageObj.getParameter("pin");
    alert(param);
    param=decodeURIComponent(param);
    alert(param);
    document.getElementById("index-pin").value=param;
    document.getElementById("index-share").onclick=function () {
        var pin=document.getElementById("index-pin").value;
        var url="https://cuixingchen.github.io/FbShare_LineShare/fb/";
        url+="?pin="+encodeURIComponent(pin);
        facebookSDK.share(url,function (response) {
            if (response && !response.error_message) {
                alert('Posting completed.');
            } else {
                alert('Error while posting.');
            }
        });
    }
};
var pageObj = {
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