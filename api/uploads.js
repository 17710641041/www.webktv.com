const upload = require('./getpath.js');
const Router = require('koa-router');

const router = new Router({
  prefix: '/api/v1'
});

router.post('/uploadImg', async (ctx, next) => {
  // 0 表示上传失败，1 表示上传成功
  let err = await upload.single('editormd-image-file')(ctx, next).then(res => res).catch(err => err)
  if (err) {
    ctx.body = {
      success: 0,
      message: "上传失败，图片不能大小超过512kb"
    }
  } else {
    ctx.body = {
      success: 1,
      message: "上传成功",
      url: 'upload/images/' + ctx.req.file.filename
    }
  }
})

module.exports = router;
