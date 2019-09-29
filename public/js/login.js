

$(function () {
  loginShow();
  clearDefault();
  postFrom();
  register();
});

function loginShow () {
  $("#login").on("click", function () {
    $(this).hide();
  })
}

function clearDefault () {
  $(".loginMin").on("click", function (e) {
    e.stopPropagation();
  })
}

function postFrom () {
  $("#loginBtn").on("click", function () {
    var username = $(".loginUserName").val();
    var password = $(".loginPassWord").val();
    if (username == '' || password == '') {
      alert("账号密码不能为空！！！")
      return false;
    }
    var data = {
      username: username,
      password: password
    };
    $.ajax({
      type: "POST",
      url: "/api/v1/user/login",
      data: data,
      success: function (msg) {
        if (msg.code == 200) {
          location.reload();
        } else {
          alert(msg.msg)
        }

      }
    });
  });
}

function register () {
  $(".registerBtn").on("click", function () {
    let username = $(".registerName").val();
    let password = $(".registerPassword").val();
    $.ajax({
      type: "POST",
      url: "/api/v1/user/create",
      data: {
        username: username,
        password: password
      },
      success: function (msg) {
        if (msg.code == 200) {
          alert("注册成功，请登录！！！")
          $(".registerName").val('');
          $(".registerPassword").val('');
        }
      }
    });
  })
}