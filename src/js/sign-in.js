$(function () {
    $("#registor").click(function () {
        //输入登录账号和密码，提示登录成功
        var login=$("#txt_name").val();
        var pwsd=$("#txt_pwsd").val();
        var re = /^[\u4e00-\u9fa5\w]{3,12}$/;
        var pwd = /^\w{6,12}$/;
        if (re.test(login) && pwd.test(pwsd)) {
        alert("欢迎，"+login+"注册成功");
        }
       //如果账户或者密码为空，则提示账号或密码为空
        else if (login == "" && pwsd == "") {
            alert("账户或密码不能为空！");
        }
      //账号或者密码输入错误，则提示输入错误，重新输入
        else
        {
            alert("账号或密码输入错误，请重新输入！");
            $("#txt_name").val();
            $("#txt_pwsd").val();
        }
    });
   //点击登录
    $("#login").click(function () {
        location.href = 'denglu.html';
    });
});

