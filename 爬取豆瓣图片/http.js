var http = require('https');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs'); //用来操作文件
var url = 'https://movie.douban.com/cinema/nowplaying/guangzhou/' //定义要爬的页面

const https = require('https');

https.get(url, (res) => {
    let html = '';
    res.setEncoding('utf8'); //设置编码格式
    res.on('data', function (chunk) {
        html += chunk; //监听data事件 每次取一块数据
    })

    res.on('end', () => {
        var $ = cheerio.load(html); //获取数据完成后，解析html
        // 将获取的图片存到images文件夹中
        $('.mod-bd img').each(function (index, item) {
            //获取图片属性
            var imgName = $(this).parent().parent().next().eq(0).text().trim();
            // 把字符中的 ... 去掉
            var reg2 = new RegExp('.','ig');//找到全部的fuck，并忽略大小写
            var str4 = imgName.replace(reg2,'***');
            var imgfile = imgName + '.jpg';
            console.log('imgfile',imgfile)
            var imgSrc = $(this).attr('src')
            // console.log('--我是http哇~~~~~~  --', imgfile, imgSrc)
            //采用request模块，向服务器发起请求 获取图片资源
            request.head(imgSrc, function (error, res, body) {
                if (error) {
                    console.log('失败了')
                }
            });
            //通过管道的方式用fs模块将图片写到本地的images文件下
            request(imgSrc).pipe(fs.createWriteStream('./images2/' + imgfile));
            // request
            //     .get(imgSrc)
            //     .on('response', function (response) {
            //         // console.log(response)
            //         // console.log(response.statusCode) // 200
            //         // console.log(response.headers['content-type']) // 'image/png'
            //     })
        })
    });

})