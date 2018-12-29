
var MallUrl = "//www.jianke.com";
if (window.location.href.indexOf("user") > 0) {
    MallUrl = "https://user.jianke.com";
}

//获取购物车
function LoadShopCar() {

    $.ajax({
        type: 'get',
        url: MallUrl + '/topuser/strShopCar',
        data: { NoCache: Math.random() },
        dataType: 'jsonp',
        error: function () {
        },
        success: function (result) {
            var htmlShopCar = "<ul>";
            if (result == undefined) {
                htmlShopCar += "购物车暂无内容！";
            }
            else {
                for (i in result) {
                    if (i > 1) {
                        htmlShopCar += "<li id=\"mtr_" + result[i].PorductCode + "\">";
                        if (result[i].Mark == 7 || result[i].Mark == 5 || result[i].Mark == 6) {
                            htmlShopCar += "<a title=\"" + result[i].PorductName + "\"\ >";
                        }
                        else {
                            htmlShopCar += "<a title=\"" + result[i].PorductName + "\" target=\"_blank\" href=\"" + "//www.jianke.com" + "/product/" + result[i].PorductCode + ".html" + "\">";
                        }
                        htmlShopCar += "<img onerror=\"src='//img.jianke.com/nopic.gif'\" src=\"//img.jianke.com/" + result[i].PorductImage + "\" original=\"//img.jianke.com/" + result[i].PorductImage + "\">";

                        htmlShopCar += "<span class=\"sh_xx_1\">" + result[i].PorductName + "</span>";

                        htmlShopCar += "<span class=\"sh_xx_2\">";

                        htmlShopCar += "<span class=\"jkn_blue\"><b>￥</b><b>" + result[i].Preferential + "</b></span><b>×" + result[i].Quantity + "</b></span></a>";

                        htmlShopCar += "<a class=\"jk_gban\" href=\"#delete\"  id=\"btn_" + result[i].PorductCode + "\" onclick=\"RomoveProduct(" + result[i].PorductCode + "," + result[i].Mark + "," + result[i].ShopCartType + ")\">删除</a>";

                        htmlShopCar += "</li>";
                    }
                }
                htmlShopCar += "</ul>";
                htmlShopCar += "<p><span>优惠：￥" + result[1].PreferentialPric + "</span>总价：￥" + result[0].ShopCarSum + "</p>";
                htmlShopCar += "<a class=\"jk_qjz\" title=\"去结算\" target=\"_blank\" href=\"" + "//cart.jianke.com" + "/purchase/shoppingcart\">去结算</a>";


            }

            $("#shopcar").html(htmlShopCar);
        }
    });
}

$.getScript(MallUrl + "/TopUser/LoginInfoMsg?R=" + Math.random());

$(function () {
    $(".shopp_an").bind("mouseenter", function (e) {
        LoadShopCar();
    });
});


function RomoveProduct(pid, mark, cartType) {
    if (confirm("确定不购买此商品吗?")) {
        if (mark == 9) {
            PanicBuying(pid, 0, mark, cartType);
        }
        $.ajax({
            type: 'get',
            url: MallUrl + "/TopUser/DelItem",
            data: { productCode: pid, mark: mark, cartType: cartType },
            dataType: 'jsonp',
            success: function (result) {
                $("#mtr_" + pid).remove();
                $("#TotalNum").html(result[0][0].TotalNum);
                $("#Total").html("￥" + result[0][0].IsSelectTotalSum);
                $("#ToPreferentialPric").html("￥" + result[0][0].IsSelectToPreferentialPric);
                $("#ToPreferential").html("￥" + result[0][0].IsSelectToPreferential);
                $("#topCount").html("<span>" + result[0][0].TotalNum + "</span>件");
                if ($("#ClassNum")) {
                    $("#ClassNum").html(result[0][0].TotalYClassNum);
                    $("#paycart").html(result[0][0].TotalNum);
                }
                var url = window.location.href.toLowerCase();
                if (url.indexOf("shoppingcart") > 0) {
                    //购物车页面
                    //判断是否有删除的换购产品
                    HasNotRemoveLi(result[0][0].IdMarks, result[0][0].ExchangeCount);
                    $("#" + pid + "_" + mark).remove();
                }
                if (url.indexOf("orderinfo") > 0) {
                    //订单提交页面
                    window.location.reload();//刷新页面
                }
            }
        });

    }

}
