# webpack配置

整理了一下自己的webpack配置，后面会继续完善-----版本  webpack 3

## react
 
 react的webpack,中间件使用react,若要换成mobx，在package.json里面把关于redux的删除，后重新install.
 
 ## vue

 vue package.json  介绍了使用了一些其它什么插件的版本.

 ## 开发环境与生产环境不同参数的配置
  
+ config文件夹
    + dev.env.js开发环境
    + prod.env.js生产环境

+ 取值
```javaxcript
const prefix = process.env.NODE_ENV === "development" ? '/dw' : '/api';
```


