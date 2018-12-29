function SearchSubmit(field,e,isAssociate){var keystr=field;if(keystr==""||keystr=="请输入要搜索的关键字"){alert("请输入要搜索的关键字！");return false;}
else if(keystr.length>30){alert("搜索的关键字不能大于30字符！");return false;}
var associate = isAssociate ? "&from=product-associate" : "";
var url = "//search.jianke.com/prod?wd=" + encodeURI(keystr.replace("<", "").replace(">", "")).toLowerCase() + associate;window.location.href=url;if(window.event){window.event.returnValue=false;}
else e.preventDefault();}
function checksearch(e){field=document.getElementById("wd").value;var eve=e||window.event;if(field==""&&eve.keyCode==13){alert("请输入搜索内容！");return false;}
else if(eve.keyCode==13){SearchSubmit(field);return false;}}
function checkbottomsearch(e,field){var eve=e||window.event;if(field==""&&eve.keyCode==13){alert("请输入搜索内容！");return false;}
else if(eve.keyCode==13){SearchSubmit(field);return false;}}
function getSearchTip(){$(function(){$('#wd').autocomplete("//search.jianke.com/ajax/getSearchTip?r="+Math.random(),{dataType:"jsonp",max:10,minChars:1,width:396,scrollHeight:300,cacheLength:0,selectFirst:0,parse:function(data){return $.map(eval(data),function(row){var strnickname=row.kindname.replace(/<\/?[^>]*>/g,'');strnickname=strnickname.replace(/&nbsp;/ig,'');return{data:row,value:strnickname,result:strnickname}});},formatItem:function(data,i,total){return data.kindname;}}).flushCache().result(function(event,row,formatted){var strnickname=row.kindname.replace(/<\/?[^>]*>/g,'');strnickname=strnickname.replace(/&nbsp;/ig,'');SearchSubmit(strnickname,undefined,true);});});}
$(document).ready(function(){getSearchTip();});
