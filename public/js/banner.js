/* ************ TOP *********** */

$(document).ready(function () {
  // banner
  function Switch (box, a, ico) {
    var c = "active",
      speed = 500,
      interval = 5000;
    for (j = 0; j < a.find('ul li').length; j++) { var add_span = "<span></span>"; ico.append(add_span); }
    ico.children().first().addClass(c);
    a.children().append(a.find('ul li').first().clone());
    var s = a.find("ul li").size();
    a.find('ul li').css({ left: "100%" }).first().css({ left: 0 });
    a.find('ul li').first().attr("current", "one");
    ico.children().click(function () {
      if (!a.find('ul li').is(":animated")) {
        $(this).addClass(c).siblings().removeClass(c);
        var index = $(this).index();
        i = index;
        var o_index = a.find('ul li[current="one"]').index();
        var e = a.find('ul li').eq(index).position().left;
        if (e > 0) { a.find('ul li').eq(o_index).stop().animate({ left: "-100%" }, speed); }
        if (e < 0 && o_index != s - 1) { a.find('ul li').eq(o_index).stop().animate({ left: "100%" }, speed); }
        if (e < 0 && o_index == s - 1) { a.find('ul li').eq(i).stop().css({ left: "100%" }); a.find('ul li').eq(o_index).stop().animate({ left: "-100%" }, speed); }
        if (e < 0 && o_index == 0) { a.find('ul li').first().stop().animate({ left: "-100%" }, speed); a.find('ul li').eq(index).css({ left: "100%" }); }
        else if (e < 0 && o_index < index) { a.find('ul li').eq(o_index).stop().animate({ left: "-100%" }, speed); a.find("ul li").eq(index).css({ left: "100%" }); }
        else if (e > 0 && o_index > index && o_index != s - 1) { a.find('ul li').eq(o_index).stop().animate({ left: "100%" }, speed); a.find('ul li').eq(index).css({ left: "-100%" }); }
        a.find('ul li').eq(index).stop().animate({ left: 0 }, speed).attr("current", "one").siblings().removeAttr("current");
      }
    });
    var i = 0,
      t = null,
      _time = 0;
    t = setInterval(MoveR, interval);
    box.children('.prev').click(function () { if (_time == 0) { _time = 1; var _index = setInterval(function () { _time--; if (_time == 0) { clearInterval(_index); } }, speed); MoveL(); } });
    box.children('.next').click(function () { if (_time == 0) { _time = 1; var _index = setInterval(function () { _time--; if (_time == 0) { clearInterval(_index); } }, speed); MoveR(); } });
    function MoveR () {
      i++;
      var o_index = a.find('ul li[current="one"]').index();
      if (i >= s - 1) { ico.children().first().addClass(c).siblings().removeClass(c); a.find("ul li").css({ left: "100%" }); a.find('ul li').eq(o_index).css({ left: 0 }); }
      if (i >= s) { i = 1; }
      var e = a.find('ul li').eq(i).position().left;
      if (e > 0) { a.find('ul li').eq(o_index).stop().animate({ left: "-100%" }, speed); }
      if (e < 0) { a.find('ul li').eq(o_index).stop().animate({ left: "100%" }, speed); }
      if (e < 0 && o_index == 0) { a.find('ul li').first().stop().animate({ left: "-100%" }, speed); a.find('ul li').eq(i).css({ left: "100%" }); }
      else if (e < 0 && o_index < i) { a.find('ul li').eq(o_index).stop().animate({ left: "-100%" }, speed); a.find("ul li").eq(i).css({ left: "100%" }); }
      else if (e > 0 && o_index > i && i != 1) { a.find('ul li').eq(o_index).stop().animate({ left: "100%" }, speed); a.find('ul li').eq(i).css({ left: "-100%" }); }
      ico.children().eq(i).addClass(c).siblings().removeClass(c);
      a.find('ul li').eq(i).stop().animate({ left: 0 }, speed).attr("current", "one").siblings().removeAttr("current");
    }
    function MoveL () {
      i--;
      var o_index = a.find('ul li[current="one"]').index();
      if (i === -1) { a.find('ul li').first().css({ left: "100%" }); a.find('ul li').last().css({ left: 0 }); i = s - 2; }
      if (i === 1) { a.find('ul li').first().css({ left: "100%" }); a.find('ul li').last().css({ left: "100%" }); }
      var e = a.find('ul li').eq(i).position().left;
      if (e > 0) { a.find('ul li').eq(i).css({ left: "-100%" }); }
      ico.children().eq(i).addClass(c).siblings().removeClass(c);
      a.find('ul li').eq(i).stop().animate({ left: 0 }, speed).attr("current", "one").siblings().removeAttr("current");
      a.find('ul li').eq(i).next().stop().animate({ left: "100%" }, speed);
    }
    box.mouseover(function () { clearTimeout(t); });
    box.mouseout(function () { t = setInterval(MoveR, interval) });
  }
  Switch($(".banner"), $(".banner-list"), $(".banner-icon"));
});