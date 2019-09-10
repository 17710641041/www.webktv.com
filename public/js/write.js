var testEditor;

$(function () {
  initEditor();
  addSubmit();
  type();
});

//提交md
function addSubmit () {
  $("#addSubmit").on("click", function () {
    var mdData = testEditor.getMarkdown();
    console.log(mdData)
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

function type () {
  $(".type-box>a").on("click", function () {
    $(this).addClass("type-on").siblings().removeClass("type-on")
  })
}