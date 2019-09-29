
var index = 1;
var isGet = true;
var str = '';

$(".jzIcon").on("click", function () {
  if (isGet) {
    ++index;
    $.ajax({
      type: "GET",
      url: "/api/v1/article/get",
      data: {
        index: index
      },
      success: function (msg) {
        if (msg.data.length != 10) {
          isGet = false;
          $(".jzIcon").hide();
          $(".jzTexe").show();
        }
        for (var i = 0; i < msg.data.length; i++) {
          str += `
            <a class="list-items" href="/activity?id=${msg.data[i].address}">
              <div class="list-items-title">${msg.data[i].title}</div>
              <div class="list-items-foot">
                <div class="users">
                  <div class="user-info">
                    <span class="name">作者: ${msg.data[i].u.nickname}</span>
                    <span class="name">时间: ${msg.data[i].createdAt}</span>
                  </div>
                </div>
              </div>
            </a>
          `
        }
        $(".list").append(str);
      }
    });
  }

})






