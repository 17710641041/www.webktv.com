$(function(){
    // 文档就绪
    showHideLogin()
    tabsLogin()
});

//登录模板显示/隐藏
function showHideLogin() {
    $("#loginBar").on( "click" , function () {
       $("#login").show();
    })
}

//切换登录注册
function tabsLogin() {
    $(".loginHead a").on( "click" , function () {
        var $index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".loginCont>div").eq($index).show().siblings().hide();
    })
}
