
$(function () {
  tx()
  logoutFun()
});

function tx () {
  $(".headimgurlImg").on("click", function () {
    $(".user-info-list").toggle();
  })
}

function logoutFun () {
  $("#logout").on("click", function () {
    $.ajax({
      type: "get",
      url: "/api/v1/user/logout",
      data: '',
      success: function (msg) {
        location.reload();
      }
    });
  })
}