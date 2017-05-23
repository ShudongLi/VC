// dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var yaml = require('js-yaml');
var fs = require('fs');

const WEB_SITE = 'site'

var home = require('./site/routes/index'),
    data = require('./site/routes/data');

//加载配置项
var _config = {}

try {
    _config = yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'config.yml'), 'utf8'))
} catch (e) {
    console.log('初始化配置信息错误,请检查目录下的_config.yml是否正确');
    console.log(e);

    return
}

var app = express()
// 设置模板目录
app.set('views', path.join(__dirname, _config.views || WEB_SITE + '/views/ejs'));
// 设置模板引擎，默认为ejs
app.set('view engine', _config.engine || 'ejs');

/**
 *
 * 以下注册均为应用级中间件
 */
app.use(favicon(path.join(__dirname, WEB_SITE + '/logo.png')));

// webpack build
var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackConfig = require('./webpack.config')

var compiler = webpack(webpackConfig)

// 加载webpck中间件
app.use(webpackDevMiddleware(compiler, {
    compress: true,
    clientLogLevel: 'info',
    noInfo: true,
    poll: 1000, // use polling instead of native watchers
    stats: {
        colors: true
    }
}))
// webpack热替换中间件
app.use(webpackHotMiddleware(compiler))

//注册静态资源
app.use('/site/static', express.static(path.join(__dirname, WEB_SITE + '/static')));
// 注册请求体解析中间件
app.use(bodyParser.json());
//采用qs解析字符串，比querstring要好
app.use(bodyParser.urlencoded({
    extended: true
}));
// 注册cookie中间件
app.use(cookieParser());

//中间件和路由的匹配原则不同，使用根路径会对所有请求进行隐射
app.get("/", function(req, res, next) {
    res.redirect('/vc');
})

//注册路由中间件
app.use('/vc', home(_config.title, _config.port));

//数据接口路由
app.use(_config.baseUrl, data)

// 注册错误处理中间件
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
