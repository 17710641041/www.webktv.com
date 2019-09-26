var testEditor, types = '', title;

$(function () {
  initEditor();
  addSubmit();
  type();
});

//提交md
function addSubmit () {
  $("#addSubmit").on("click", function () {
    if ($("#activity-title").val() == '') {
      alert("标题不能为空")
      return false;
    }
    if (testEditor.getMarkdown() == '') {
      alert("内容不能为空")
      return false;
    }
    if (types == '') {
      alert("分类不能为空")
      return false;
    }
    var data = {
      title: title = $("#activity-title").val(),
      cont: testEditor.getMarkdown(),
      type: types,
    };
    $.ajax({
      type: "POST",
      url: "/api/v1/article/add",
      data: data,
      success: function (msg) {
        console.log(msg);
        if (msg.code == 200) {
          alert("发布成功");
          location.reload();
        } else {
          alert(msg.msg)
        }
      }
    });
  })
}

//初始化编辑器
function initEditor () {
  testEditor = editormd("test-editormd", {
    width: "97%",
    height: 500,
    path: '/js/lib/',
    watch: false,
    imageUpload: true,
    imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
    imageUploadURL: "/api/v1/uploadImg",
    toolbarIcons: function () {
      return ["watch", "bold", "italic", "image", "table", "link"]
    },
    placeholder: "请在这里撰写文章简介，文章简介是决定用户是否愿意继续阅读内容的重要条件，请完善的提炼文章核心内容，支持 Markdown 编写。"
  });
}

//分类切换
function type () {
  $(".type-box>a").on("click", function () {
    $(this).addClass("type-on").siblings().removeClass("type-on");
    types = $(this).attr("typeid")
  })
}