$(function() {
    var testEditor = editormd("test-editormd", {
        width: "97%",
        height: 500,
        path : '/js/lib/',
        watch : false,
        imageUpload : true,
        imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL : "asd",
        toolbarIcons : function() {
            return [
                "watch",
                "bold",
                "italic",
                "image",
                "table",
                "link"
            ]
        },
        placeholder:"请在这里撰写文章简介，文章简介是决定用户是否愿意继续阅读内容的重要条件，请完善的提炼文章核心内容，支持 Markdown 编写。"
    });
});
