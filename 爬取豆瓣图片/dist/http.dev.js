"use strict";

var http = require('https');

var request = require('request');

var cheerio = require('cheerio');

var fs = require('fs'); //用来操作文件


var url = 'https://movie.douban.com/cinema/nowplaying/guangzhou/'; //定义要爬的页面

var https = require('https');

https.get(url, function (res) {
  var html = '';
  res.setEncoding('utf8'); //设置编码格式

  res.on('data', function (chunk) {
    html += chunk; //监听data事件 每次取一块数据
  });
  res.on('end', function () {
    var $ = cheerio.load(html); //获取数据完成后，解析html
    // 将获取的图片存到images文件夹中

    $('.mod-bd img').each(function (index, item) {
      //获取图片属性
      var imgName = $(this).parent().parent().next().eq(0).text().trim();
      var imgfile = imgName + '.jpg';
      var imgSrc = $(this).attr('src');
      console.log(imgfile, imgSrc); //采用request模块，向服务器发起请求 获取图片资源

      request.head(imgSrc, function (error, res, body) {
        if (error) {
          console.log('失败了');
        }
      }); //通过管道的方式用fs模块将图片写到本地的images文件下

      request(imgSrc).pipe(fs.createWriteStream('./images2/' + imgfile));
    });
  });
});