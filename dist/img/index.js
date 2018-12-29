$(function(){
  //头部网站导航
	$('.site_nav').mousemove(function(){
		$(this).addClass('mysite_nav');
	});
	$('.site_nav').mouseleave(function(){
		$(this).removeClass('mysite_nav');
	});	

  //
  $('.my_jianke').hover(function(){
    $(this).addClass('myjk_hover');
  },function(){
    $(this).removeClass('myjk_hover');
  });

  //
  $('.shopping_cart').hover(function(){
    $(this).addClass('myshopping_cart');
  },function(){
    $(this).removeClass('myshopping_cart');
  });

  //
  $('.mobile_version').hover(function(){
    $(this).addClass('mv_hover');
  },function(){
    $(this).removeClass('mv_hover');
  });

  //查看订单
  $('.cxdd').click(function(){
    $(this).parent().addClass('logistics_active')
  })
  $('#wlcx_close').click(function(){
    $('.logistics_query').removeClass('logistics_active');
  })

  /*输入框获取、失去焦点*/
  function Focus(e) {
    e.focus(function() {
      $(this).val() == this.defaultValue ? $(this).val('') : '';
    });
    e.blur(function() {
      $(this).val() == '' ? $(this).val(this.defaultValue) : '';
    });
  }
  var e=$('.jk_log_query input[type=text]')
  Focus(e);


  //logo滚动
  function LogoScroll(obj) {
    return function(){
      $(obj).find("ul").animate({
          marginTop: "-20px"
      }, 500, function () {
          $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
      })
    }
  };
  var timerauto = null;
  timerauto = setInterval(LogoScroll(".jk_zs"), 1500);
  $(".jk_zs").mouseover(function () {
      clearInterval(timerauto);
  }).mouseout(function () {
      timerauto = setInterval(LogoScroll(".jk_zs"), 1500);
  })
  

  //导航栏
  $('.mc .item').each(function(){
    $(this).hover(function(){
      $(this).addClass('hover');
      $(this).children('.jnk_a_dl').find('dt').animate({
        marginLeft: '10px'
      },300);
    },function(){
      $(this).removeClass('hover');
      $(this).children('.jnk_a_dl').find('dt').stop(true).animate({
        marginLeft: '0px'
      },300);
    })
  });
  //
if($.browser.msie && ($.browser.version <="9.0")){

  $('.slide_right_middle li').each(function(){
    $(this).hover(function(){
      $(this).children('a').find('em').animate({
          marginTop: '10px'},300);
    },function(){
      $(this).children('a').find('em').stop(true).animate({
          marginTop: '15px'},300);
    })
  });

  $('.tszl_ul li').each(function(){
      $(this).hover(function(){
        $(this).children('a').find('img').animate({
            marginRight: '15px'},300);
        // alert($(this).children('a').find('img').attr('class'));
      },function(){
        $(this).children('a').find('img').stop(true).animate({
            marginRight: '10px'},300);
      })
    }) 
  // $('.jk_tszl .img_box').each(function(){
  //   $(this).hover(function(){
  //     $(this).stop(true).animate({
  //       bottom: '25px'},300);
  //   },function(){
  //     $(this).stop(true).animate({
  //       bottom: '20px'},300);
  //   })
  // });

    $('.right_box_l li').each(function(){
      $(this).hover(function(){
        $(this).children('a').find('img').animate({
            marginLeft: '15px'},300);
        // alert($(this).children('a').find('img').attr('class'));
      },function(){
        $(this).children('a').find('img').stop(true).animate({
            marginLeft: '25px'},300);
      })
    }) 
    $('.right_box_r li').each(function(){
      $(this).hover(function(){
        $(this).children('a').find('img').animate({
            marginLeft: '97px'},300);
        // alert($(this).children('a').find('img').attr('class'));
      },function(){
        $(this).children('a').find('img').stop(true).animate({
            marginLeft: '107px'},300);
      })
    }) 

  
}


  function Change(element,element1){
    $('.'+element+'>ul li').each(function(){
      $(this).hover(function(){
          var index=$(this).index();
          $(this).addClass('active').siblings('li').removeClass('active');
          $('.'+element1+'>div').eq(index).show().siblings('div').hide();
      })
    })
  }
  //健康资讯
  Change('jkn_zx','jk_box')
  //link
  Change('jkn_link','jk_con_links')

  //轮播图
  $('.banner-pic,.banner-btn').mousemove(function(){
    $('.banner-btn').show(0);
  }).mouseleave(function(){
    $('.banner-btn').hide(0);
  });

  //居中
  var len=$('.banner-ctrl li').size();
  $('.banner-ctrl').css({'width':len*71,'margin-left':-len*35.2});
  $('.banner-ctrl li:gt('+(len-3)+')').find('div').css({'right':0,'left':'auto'});

  //健客快报
    if($('.slide_right_bottom dd p').size()<5){
      $('.slide_right_bottom dt a').hide()
    }


  //右侧导航栏
  $('.wx').mouseover(function(){
    $(this).stop(true,false).animate({top:"-60px"},200);
  });
  $('.wtc').mouseover(function(){
    $(this).stop(true,false).animate({top:"-74px"},200);
  });
  $('.wx,.wtc').mouseleave(function(){
    $(this).stop(true,false).animate({top:"0"},200);
  });
  $("#jiankecode,.codeshow span,.codeshow").mouseover(function(){
      $(".codeshow").show().stop(true,false).animate({left:"-330px"},100);
    });
  $("#jiankecode,.codeshow span,.codeshow").mouseleave(function(){
      $(".codeshow").stop(true,false).animate({left:"-200px"},100,function(){
        $(".codeshow").hide();
      });
  });
  window.onscroll = function () {
      var scroll_top = document.documentElement.scrollTop || document.body.scrollTop;
      if (parseInt(scroll_top) < 450) {
          $(".re_top").fadeOut(200);
      }
      else {
          $(".re_top").fadeIn(200);
      }
  }

  //快报页面
  var str=$('.wrap_list_l dd p span').text();
  var txt=CutStr(str,146);
  $('.wrap_list_l dd p span').text(txt);

  $('.page_l a.prev').hover(function(){
    $(this).find('em').addClass('prev_on')
  },function(){
     $(this).find('em').removeClass('prev_on')
  });
  $('.page_l a.next').hover(function(){
    $(this).find('em').addClass('next_on')
  },function(){
     $(this).find('em').removeClass('next_on')
  });

})

function AddFavorite(title, url) {
   try {
    window.external.addFavorite(url, title);
  }
  catch (e) {
    try {
       window.sidebar.addPanel(title, url, "");
    }
    catch (e) {
      alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
    }
  }
}

function CutStr(str, len) {
  var temp;
  var icount = 0;
  var patrn = /[^\x00-\xff]/;
  var strre = "";
  for (var i = 0; i < str.length; i++) {
    if (icount < len - 1) {
      temp = str.substr(i, 1);
      if (patrn.exec(temp) == null) {
        icount = icount + 1
      } else {
        icount = icount + 2
      }
      strre += temp
    } else {
      break
    }
  }
  return strre + "......"
}