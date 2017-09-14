window.onload = function(){
    var param=pageObj.getParameter("pin");
    alert(param);
    param=decodeURIComponent(param);
    alert(param);
    document.getElementById("index-pin").value=param;
    //用device.js判斷桌機還是手機來藏按鈕
    if(device.desktop()){
        document.getElementById("Linemobile").style.display="none";
    }else{
        document.getElementById("LinePc").style.display="none";
    }
    document.getElementById("LinePc").onclick = function(){
        var pin=document.getElementById("index-pin").value;
        window.open('https://lineit.line.me/share/ui?url='+encodeURIComponent("https://cuixingchen.github.io/FbShare_LineShare/line/?pin="+pin),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")
    }
    document.getElementById("Linemobile").onclick = function(){
        var pin=document.getElementById("index-pin").value;
        window.open('line://msg/text/'+ encodeURIComponent("https://cuixingchen.github.io/FbShare_LineShare/line/?pin="+pin),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")
    }
}
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
