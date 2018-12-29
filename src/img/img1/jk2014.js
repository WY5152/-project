$(function(){
	//给焦点图增加id
	var jdtsl=$('.play ul li').length;
	var ol_tt="";
		for(var tt=1;tt<=jdtsl;tt++){
			$('.play ul li').eq(tt-1).attr('id','jk_jdt'+tt).css("display","none");
			ol_tt += "<li jk_rolling=\"jk_jdt"+tt+"\"></li>";
		}
	$("#jk_jdt").append(ol_tt);
	$('.play ol li').eq(0).addClass("active");
	$('.play ul li').eq(0).show().siblings().hide();
	
	$('#jk_div1 li span').each(function(i) {
			if((i+1)%3==0){
				$(this).addClass('sd_last');
			}  
    });
	
	//给横条1增加id
	var jdtsll=$('.jkn_cpzs ul').length;
	var ol_ttt="";
		for(var ttt=1;ttt<=jdtsll;ttt++){
			$('.jkn_cpzs ul').eq(ttt-1).attr('id','list'+ttt).css("display","none");
			ol_ttt += "<li jk_rolling=\"list"+ttt+"\"></li>";
		}
	$("#jk_love").append(ol_ttt);
	$('.jkn_cpzs ul').eq(0).css("display","block");
	
	//给横条2增加id
	var jdtslll=$('.jkn_wrap_m_l_t ul li').length;
	var ol_tttt="";
		for(var tttt=1;tttt<=jdtslll;tttt++){
			$('.jkn_wrap_m_l_t ul li').eq(tttt-1).attr('id','jk_zs'+tttt).css("display","none");
			ol_tttt += "<li jk_rolling=\"jk_zs"+tttt+"\"></li>";
		}
	$("#jianke_zs1").append(ol_tttt);
	$('.jkn_wrap_m_l_t ul li').eq(0).css("display","block");
	
	//给健康问答新闻增加id
	var jdtsllll=$('#jk_div3 .yyzd_ul li').length;
	var ol_ttttt="";
		for(var ttttt=1;ttttt<=jdtsllll;ttttt++){
			$('#jk_div3 .yyzd_ul li').eq(ttttt-1).attr('id','jk_xxyy'+ttttt).css("display","none");
			ol_ttttt += "<li jk_rolling=\"jk_xxyy"+ttttt+"\"></li>";
		}
	$("#jk_zs4").append(ol_ttttt);
	$('#jk_zs4 li').eq(0).addClass("active");
	$('#jk_div3 .yyzd_ul li').eq(0).css("display","block");
	
	//给新闻报道增加id
	var jdtslllll=$('.jkn_wrap_b_b_r_t ul li').length;
	var ol_tttttt="";
		for(var tttttt=1;tttttt<=jdtslllll;tttttt++){
			$('.jkn_wrap_b_b_r_t ul li').eq(tttttt-1).attr('id','jk_xebd'+tttttt).css("display","none");
			ol_tttttt += "<li jk_rolling=\"jk_xebd"+tttttt+"\"></li>";
		}
	$("#jianke_zs3").append(ol_tttttt);
	$('.jkn_wrap_b_b_r_t ul li').eq(0).css("display","block");
	
	var gdxwts=$('.jkn_wrap_t_r_b ul li').length;
	var gdxwwz="";
	for(var gdxwtss=1;gdxwtss<=gdxwts;gdxwtss++){
			$('.jkn_wrap_t_r_b ul li').eq(gdxwtss-1).attr('id','jk_zxzs'+gdxwtss).css("display","none");
			gdxwwz += "<li jk_rolling=\"jk_zxzs"+gdxwtss+"\"></li>";
		}
	$("#jianke_zs2").append(gdxwwz);
	$('.jkn_wrap_t_r_b ul li').eq(0).css("display","block");
	
	$('#jk_div1 li').last().addClass('last');	//给健康问答最后一个LI增加last
	
	$('.jkn_wrap_t_m_b ul').each(function(){
		if($("body").hasClass("swidth1210")){
			$(this).find('li').eq(3).css('border-right-color','#fff');
		}
		else if($("body").hasClass("swidth980")){
			$(this).find('li').eq(3).css('display','none');
			$(this).find('li').eq(2).css('border-right-color','#fff');
		}
		});

	$('.play').mouseover(function(){	//鼠标移上去显示按钮
		$('#jkjdt_play .next,#jkjdt_play .prev').css("display","block");
	});
	$('.play').mouseout(function(){		//鼠标离开隐藏按钮
		$('#jkjdt_play .next,#jkjdt_play .prev').css("display","none");
	});
	$("#jk_love li").powerSwitch({	//第一条横条滚动
	animation: "translate",
	autoTime: 5000,
	container: $("#jkn_cpzsan")
	});
	$("#jianke_zs1 li").powerSwitch({	//第二条横条滚动
	animation: "translate",
	autoTime: 8000,
	container: $("#jkzs1")
	});
	$("#jianke_zs2 li").powerSwitch({	//健康问答新闻
	direction: "vertical",
	animation: "translate",
	autoTime: 3000,
	container: $("#jkzs2")
	});
	$("#jianke_zs3 li").powerSwitch({	//新闻报道
	animation: "translate",
	autoTime: 4000,
	container: $("#jkzs3")
	});
	$("#jk_zs4 li").powerSwitch({	//用药报道
	classAdd: "active",
	animation: "translate",
	autoTime: 4000,
	eventType: "hover",
	container: $("#jkzs4")
	});
	$("#jk_jdt li").powerSwitch({		//首页焦点图
	classAdd: "active",
	animation: "translate",
	eventType: "hover",
	autoTime: 4000,
	container: $("#jkjdt_play")
	});
	//快递号查询
	$('.logistics_query a').click(function(){
		$('.logistics_query').addClass('logistics_active');
	});
	$('.jk_log_query a').click(function(){
		$('.logistics_query').removeClass('logistics_active');
	});
	$('.jkn_wrap_b_b_r_t_t_r dd a').each(function(i){	//判断健康资讯跟用药指导的字数
		var str=$(this).text().length;
			if( str>130){
			var tt=$(this).text().substring(1,130)+'...';
			$(this).text(tt);	
			}
	})
	
	$('.jkn_sear_box').focus(function(){	//头部搜索框获得焦点
		var str = $(this).val();
        if(str == "请输入关键词搜索")
        {
           $(this).val("").css("color","#000");
        }
	});
	$('.jkn_sear_box').blur(function(){		//头部搜索框失去焦点
		var str = $(this).val();
        if(str == "")
        {
           $(this).val("请输入关键词搜索").css("color","#999");
        }
	});
	
	$('.jk_log_ddh').focus(function(){		//订单号获得焦点
		var str = $(this).val();
        if(str == "请输入手机号或订单号")
        {
           $(this).val("").css("color","#000");
        }
	});
	$('.jk_log_ddh').blur(function(){		//订单号失去焦点
		var str = $(this).val();
        if(str == "")
        {
           $(this).val("请输入手机号或订单号").css("color","#999");
        }
	});
	
	$('.jk_log_yzm').focus(function(){			//输入验证码获得焦点
		var str = $(this).val();
        if(str == "验证码：")
        {
           $(this).val("").css("color","#000");
        }
	});
	$('.jk_log_yzm').blur(function(){			//输入验证码失去焦点
		var str = $(this).val();
        if(str == "")
        {
           $(this).val("验证码：").css("color","#999");
        }
	});
	
	$('#jk_div1 .jkwd_sear_box').focus(function(){		//输入问题获得焦点
		var str = $(this).val();
        if(str == "请输入您的问题")
        {
           $(this).val("").css("color","#000");
        }
	});
	$('#jk_div1 .jkwd_sear_box').blur(function(){			//输入问题失去焦点
		var str = $(this).val();
        if(str == "")
        {
           $(this).val("请输入您的问题").css("color","#999");
        }
	});
	
	$('#jk_div2 .jkwd_sear_box').focus(function(){		//输入问题获得焦点
		var str = $(this).val();
        if(str == "输入疾病名称或部位")
        {
           $(this).val("").css("color","#000");
        }
	});
	$('#jk_div2 .jkwd_sear_box').blur(function(){			//输入问题失去焦点
		var str = $(this).val();
        if(str == "")
        {
           $(this).val("输入疾病名称或部位").css("color","#999");
        }
	});
	$('#jk_div3 .jkwd_sear_box').focus(function(){		//输入问题获得焦点
		var str = $(this).val();
        if(str == "输入药品名称")
        {
           $(this).val("").css("color","#000");
        }
	});
	$('#jk_div3 .jkwd_sear_box').blur(function(){			//输入问题失去焦点
		var str = $(this).val();
        if(str == "")
        {
           $(this).val("输入药品名称").css("color","#999");
        }
	});
	//疾病自诊开始
	var sex = true;
	var zf = true;
	function chpic(sex,zf)
	{
		var obj = $(".jk_jbzz");
		if(sex==true&&zf==true){obj.find("div.jkna_z").show().siblings("div").hide();}
		if(sex==true&&zf==false){obj.find("div.jkna_b").show().siblings("div").hide();}
		if(sex==false&&zf==true){obj.find("div.jknv_z").show().siblings("div").hide();}
		if(sex==false&&zf==false){obj.find("div.jknv_b").show().siblings("div").hide();}
	}
	$('.jk_xingbie li').mousemove(function()
	{
		var index = $(this).index();
		if(index == 0){sex = true;chpic(sex,zf);$(this).addClass("action").next().removeClass("action");}
		else{sex = false;chpic(sex,zf);$(this).addClass("action").prev().removeClass("action");}
		
	});
	$('.jk_zhengfang li').mousemove(function()
	{
		var index = $(this).index();
		if(index == 0){zf = true;chpic(sex,zf);$(this).addClass("action").next().removeClass("action");}
		else{zf = false;chpic(sex,zf);$(this).addClass("action").prev().removeClass("action");}
	});
		$('.jkn_wrap_m_r_b_t li a').hover(function(){
		if($.browser.msie&&($.browser.version <= "9.0")){ 
			$(this).stop(true,false).animate({"padding-top":"0","padding-bottom":"25px"},500); 
		}
			},function(){
			if($.browser.msie&&($.browser.version <= "9.0")){ 
				$(this).stop(true,false).animate({"padding-top":"13px","padding-bottom":"14px"},500);
				}
			}
		);
	//网站地图开始
	$('.site_nav').mousemove(function(){
		$(this).addClass('mysite_nav');
	});
	$('.site_nav').mouseleave(function(){
		$(this).removeClass('mysite_nav');
	});
	//hot new JS控制开始
	function ysautoPlay(){
	$(".jk_n_n_new").stop(true,false).animate({top:"-8px"},200).animate({top:"-10px"},200).animate({top:"-12px"},200).animate({top:"-10px"},200);
		};
	ys_timeer=setInterval(ysautoPlay,800);
	//hot new JS控制结束
	
/*	微信弹窗开始*/
	$('#wxtc2015 .jktccl').click(function(){
		var _index=$(this).index()-2;
		$('.jkwxzs').hide().eq(_index).show();
		$('#LRdiv1').hide();
		$('#LRdiv0').show();
		$('.wxtc2014').show();		
	});
	$('.wxtc2014 .wxtcanc a').click(function(){
		$('.wxtc2014').hide();
		$('#LRdiv0').hide();
		$('#LRdiv1').show();
	});
});