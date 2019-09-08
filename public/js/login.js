$(function () {
  loginShow();
  clearDefault();
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