
var index = 1;
var isGet = true;
var str = ''

$(window).scroll(function () {
  var viewHeight = $(window).height();//可见高度
  var contentHeight = $(".list").get(0).scrollHeight + 460;//内容高度
  var scrollHeight = $(document).scrollTop();//滚动高度
  //console.log(contentHeight - viewHeight - scrollHeight);
  if (contentHeight - viewHeight - scrollHeight <= 0) {
    if (isGet) {
      $(".list-footer").show();
      ++index;
      $.ajax({
        type: "GET",
        url: "/api/v1/article/get",
        data: {
          index: index
        },
        success: function (msg) {
          console.log(msg);
          if (msg.length < 10) {
            isGet = false;
          }
          for (var i = 0; i < msg.length; i++) {

          }
          $(".list-footer").hide();
        }
      });
    }
  } else {

  }

});




