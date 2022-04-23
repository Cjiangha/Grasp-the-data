"use strict";

$('.mod-bd img').each(function (index, item) {
  //获取图片属性
  var imgName = $(this).parent().parent().next().eq(0).text().trim(); // var imgfile = imgName + '.jpg';

  var imgSrc = $(this).attr('src');
  console.log(imgName);
});
$('.slide-page img').each(function (index, item) {
  //获取图片属性
  var imgName = $(this).parent().next().eq(0).text().trim();
  var imgpingfen = $(this).parent().next().eq(0).find('strong').text().trim();
  var n = imgName.search(imgpingfen); //找到的下标

  var neirong = imgName.slice(0, n); //拿到的内容

  var imgSrc = $(this).attr('src');
});
var arr = [];
var big = document.querySelectorAll('.second-and-third-list');
var small;
big.forEach(function (items, index) {
  var title = items.children[0].innerHTML; //找到所有的title

  small = items.children[1]; //找到下面最大盒子节点

  for (var i = 0; i < small.length; i++) {
    console.log(small[i].children[0]);
  }

  var imgsrc = items.children[1].children[0].children[0].children[0];
});
arr.push({
  title: title,
  money: $(value).find(".name .red").text(),
  address: addressArr,
  company: $(value).find(".info-company a").text(),
  type: typeArr,
  position: $(value).find(".info-publis .name").text(),
  txImg: $(value).find(".info-publis img").attr("src"),
  time: $(value).find(".info-publis p").text()
});
/*
    json格式  
   let arr = [{
        title:
        listitem:[{
            imgUrl:'xxx',
            data:T恤1
        },{
            imgUrl:'xxx',
            data:T恤2
        }]
    }]

*/
//[{},{}]

var dataitems = document.querySelectorAll('.second-and-third-list');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = dataitems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var ele = _step.value;
    //遍历出所有的
    var obj = {}; // var img = ele.querySelectorAll('.list-flex-wrap img');  //找到所有的图片

    var list = ele.querySelectorAll('.flex-item');
    list.forEach(function (items, index2) {
      console.log(items, index2);
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}