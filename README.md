# Grasp-the-data
Grasp the data about the bom.

爬取的网站，如果该网站使用到了jquery技术，那么我们可以使用jquery的dom操作进行数据的爬取


## 如何运行http 爬取图片到本地 
1.0版本
使用
```js
 request(imgSrc).pipe(fs.createWriteStream('./images2/' + imgfile));
```
因为是用管道以及流的方式写入到文件夹，那么需要做的一个步骤是要先自动化的创建一个文件夹，那么现在可以用代码的方式去实现，现在用最笨的方法就是在本地相关的目录下，创建createWriteStream下对应的文件夹，然后，这个在这个文件夹里面写入相应的文件即可

