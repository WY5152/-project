var CartTotalUrl = "https://wcgi.jianke.com";
var MallUrl = "//www.jianke.com";
/**
 * 判断登录状态
 */
function isLogin() {
  return !!(this.getCookie('MemberToken'));
};

function getCookie(name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  } else {
    return null;
  }
};

function getTopCartNumber() {
  if (isLogin()) {
    // //登陆状态下
    $.ajax({
      type: 'get',
      url: CartTotalUrl + "/memberShopCarts/total",
      dataType: 'jsonp',
      success: function (result) {
        $('#topcount span').html(result);
      }
    });
  } else {
    //不登陆情况下
    // 读取本地缓存里的商品
    var rxTotal = 0;
    var otcTotal = 0;
    var total = 0;
    var rx = JSON.parse(window.localStorage.getItem('rx')) || [];
    var otc = JSON.parse(window.localStorage.getItem('otc')) || [];
    if (rx.length) {
      $.each(rx, function (key, value) {
        rxTotal += value[0].productNum;
      });
    }
    if (otc.length) {
      $.each(otc, function (key, value) {
        otcTotal += value[0].productNum;
      });
    }
    total = rxTotal + otcTotal;
    $('#topcount span').html(total);
  }
};

$(function () {
  $.getScript(MallUrl + "/TopUser/LoginInfoMsg?R=" + Math.random()).then(function () {
    getTopCartNumber();
  });
});