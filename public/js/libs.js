$(function () {
  // 文档就绪
  showHideLogin()
  tabsLogin()
  fb()

});

//登录模板显示/隐藏
function showHideLogin () {
  $("#loginBar").on("click", function () {
    $("#login").show();
  })
}

//切换登录注册
function tabsLogin () {
  $(".loginHead a").on("click", function () {
    var $index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".loginCont>div").eq($index).show().siblings().hide();
  })
}

//获取指定名称的cookie的值 
function getCookie (objName) {
  var arrStr = document.cookie.split("; ");
  for (var i = 0; i < arrStr.length; i++) {
    var temp = arrStr[i].split("=");
    if (temp[0] == objName) {
      return decodeURI(temp[1]);
    }
  }
}

function fb () {
  $("#pubBtn").on("click", function () {
    alert("请先登录！！！");
  })
}