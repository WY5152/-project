 function loadScript(url,callback){
          var script = document.createElement('script');    
          script.type = 'text/javascript'; 
          script.async=false;             
          script.src = url;                                
         document.getElementsByTagName('head')[0].appendChild(script);  
	  script.onload=function(){
             if(typeof callback==='function'){
               callback(); 
            }
          } 
}
 function loadLink(url){
        var link=document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", url);
        document.getElementsByTagName('head')[0].appendChild(link);
}
var jsSrc = null;
var GetArgs = (function () {
    var sc = document.getElementsByTagName("script");
    for (var i = 0; i < sc.length; i++) {
        jsSrc = sc[i].src;
        var jsName = jsSrc.substring(jsSrc.lastIndexOf('/') + 1, jsSrc.lastIndexOf('.js'));
        jsName = jsName.match(/[stat]*/)[0];
        if (jsName != undefined && jsName != null && jsName != "" && jsName.toLowerCase() == "stat") {
            var paramsArr = null;
            if ((/\b(siteid)\b/).test(jsSrc) && jsSrc.indexOf('?') > -1 && jsSrc.split('?')[1] != undefined && jsSrc.split('?')[1] != null) {
                paramsArr = jsSrc.split('?')[1].split('&');
                var args = {}, argsStr = [], param, t, name, value;
                for (var ii = 0, len = paramsArr.length; ii < len; ii++) {
                    param = paramsArr[ii].split('=');
                    name = param[0], value = param[1];
                    if (typeof args[name] == "undefined") { //参数尚不存在
                        args[name] = value;
                    } else if (typeof args[name] == "string") { //参数已经存在则保存为数组
                        args[name] = [args[name]]
                        args[name].push(value);
                    } else {  //已经是数组的
                        args[name].push(value);
                    }
                }
                return function () { return args; } //以json格式返回获取的所有参数
                break;
            }
        }
    }
})();

if (jsSrc != null && jsSrc.indexOf('?') > -1) {
    var urlStr = "", Id = "";
    if (GetArgs()["siteid"] != undefined && GetArgs()["siteid"] != null && GetArgs()["siteid"] != "") {
        Id = GetArgs()["siteid"];
        urlStr += "&siteid=" + Id;
    }
    if (GetArgs()["domainid"] != undefined && GetArgs()["domainid"] != null && GetArgs()["domainid"] != "")
        urlStr += "&domainid=" + GetArgs()["domainid"];
    else {
        var domainName = window.location.host;
        if (domainName.split('.').length > 2)
            domainName = domainName.substring(domainName.indexOf('.') + 1);
        urlStr += "&domainid=" + domainName;
    }

    if (GetArgs()["number"] != undefined && GetArgs()["number"] != null && GetArgs()["number"] != "")
        urlStr += "&number=" + GetArgs()["number"];

    if (GetArgs()["psiteid"] != undefined && GetArgs()["psiteid"] != null && GetArgs()["psiteid"] != "")
        Id = GetArgs()["psiteid"] + "/" + Id;

    var borwerStr = navigator.userAgent.toLowerCase();
    var Regspiders = /Bot|Crawl|Spider|slurp|sohu-search|lycos|robozilla/gim;

    var urls = (window.location.protocol + '').indexOf('https:') >= 0 ? "https://mswt2.jianke.com" : ("http://" + "mswt.jianke.com");
    if (!Regspiders.test(borwerStr)) {
        try {
            if (jQuery) {
                // jQuery 已加载
            } else {
                 loadScript(urls + "/Scripts/jquery-1.7.2.min.js");
            }
        } catch (e) {
             loadScript(urls + "/Scripts/jquery-1.7.2.min.js");
        }
        var temp = false;
        if (temp && Id == 'a101') { // && (/\/(3003|675|4450|3781|9632|9647|301337)\.html/gi).test(window.location.pathname)) { //tw, a1nanke 测试
             loadScript(urls + "/Scripts/config/" + Id + ".js?v=" + new Date().getDay() + urlStr);
             loadLink("//mswt2.jianke.com/Css/swt_mini.css");
            var agent = navigator.userAgent.toLowerCase(); //获取浏览器标识
            var flag = !!window.WebSocket && agent.indexOf('firefox') < 0;
            if (flag && agent.indexOf("msie") > 0) {
                var ieinfo = agent.match(/msie [\d.]+;/gi);
                var iever = parseFloat((ieinfo + '').replace(/[^0-9.]/g, ''));
                flag = iever > 10.0;
            }
            if (flag){
                loadScript("//mswt2.jianke.com/Scripts/chat_main.js");
            }
            else{
               loadScript("//mswt2.jianke.com/Scripts/xhr/chat_main.js");
           }
        }
        else {
				 loadScript( urls + "/Scripts/config/" + Id + ".js?v=" + new Date().getDay() + urlStr,function(){
 		             loadScript(  urls + "/Scripts/lead.js?v=" + new Date().getDay());         
                });
                loadLink( urls + "/Css/wccotact.css");
        }
    }
}