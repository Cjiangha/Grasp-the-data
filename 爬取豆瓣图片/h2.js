// var http = require('https');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs'); //用来操作文件
var url = 'https://movie.douban.com/' //定义要爬的页面
const https = require('https');
https.get(url, (res) => {
    let html = '';
    res.setEncoding('utf8'); //设置编码格式
    res.on('data', function (chunk) {
        html += chunk; //监听data事件 每次取一块数据
    })
    res.on('end', () => {
        var $ = cheerio.load(html); //获取数据完成后，解析html
        console.log($);
        // 将获取的图片存到images文件夹中
        $('.slide-page img').each(function (index, item) {
            //获取图片属性
            var imgName = $(this).parent().next().eq(0).text().trim();
            var imgpingfen = $(this).parent().next().eq(0).find('strong').text().trim();
            var n = imgName.search(imgpingfen);//找到的下标
            var neirong = imgName.slice(0, n);//拿到的内容
            var imgfile = neirong + '.jpg';
            var imgSrc = $(this).attr('src');
            console.log(imgfile, imgSrc);
            request.head(imgSrc, function (error, res, body) {
                if (error) {
                    console.log('失败了')
                }
            });
            // downloadPic(imgSrc, './catpics/' + imgfile);
            //通过管道的方式用fs模块将图片写到本地的images文件下
            request(imgSrc).pipe(fs.createWriteStream('./images2/' + imgfile));
        });
    })
});

