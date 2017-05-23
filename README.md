## 使用

1. 按照依赖
```
npm install
```
2. 启动
```
npm start
```

## 项目结构

```
|-bin 命令集
|-site 网站
|	|-routes 服务端路由
|	|-static 静态资源
|   |   |-css 样式文件
|   |   |-docs 组件markdown文件
|   |   |-fonts
|   |   |-img
|   |   |-js javascript文件
|   |   |-App.vue
|   |   |-index.es6 入口文件
|   |-views 视图
|-src 组件
|	|-components 组件库
|	|-less 样式文件
|	|-index.es6 入口文件
|-test 测试用例
|   |-mocha.opts mocha配置文件
|   |-commonjs 符合commonjs语法规范的测试用例
|   |-es6 符合ES6语法规范的测试用例
|-.babelrc babel配置文件
|-.eslintrc eslint配置文件
|-app.js 服务端入口文件
|-browserslist autoprefixer配置文件
|-config.yml 项目配置文件
|-jsdoc.json jsdoc配置文件
|-karma.conf.js karma配置文件
|-nodemon.json nodemon配置文件
```
