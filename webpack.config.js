var path = require('path')
var yaml = require('js-yaml');
var fs = require('fs');
var autoprefix = require('autoprefixer'),
	markdown = require('markdown-it')({

		html: true,
		breaks: true
	}),
	webpack = require('webpack'),
	DirectoryNameAsMain = require('webpack-directory-name-as-main')

markdown.renderer.rules.table_open = function() {

	return '<table class="table table-bordered">'
}

markdown.use(require('markdown-it-classy'))

//load config
var _config = {}

try {
    _config = yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'config.yml'), 'utf8'))
} catch (e) {
    console.log('初始化配置信息错误,请检查目录下的_config.yml是否正确');
    console.log(e);

    return
}

var site = _config.site,
	alias = _config.alias,
	publicPath = 'http://localhost:' + (_config.port || 3000) + '/',
	_alias = {}

for(var k in alias.path) {

	_alias[k] = path.resolve(alias.path[k])
}

for(var k in alias.vendor) {

	_alias[k] = alias.vendor[k]
}

module.exports = {

	entry: {

		main: [
			site.entry,
			'webpack-hot-middleware/client?reload=true'
		],
		vendor: _config.vendor
	},
	output: {

		path: '/',
		publicPath: publicPath,
		filename: '[name].js'
	},
	resolve: {

		alias: _alias,
		extensions: ['', '.vue', '.js', '.es6', '.json', '.less', '.html', '.md']
	},
	resolveLoader: {

		root: path.join(__dirname, 'node_modules'),
	},
	module: {

		preLoaders: [

			{

				test: /\.(vue|es6)$/,
				exclude: /node_modules/,
				loader: 'eslint'
			}
		],
		loaders: [
			{
				
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue'
			},
			{
				
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.css$/,
				//实现css模块化
				loader: "style-loader!css-loader!postcss-loader"
			},
			{
				test: /\.theme$/,
				//modules&localIdentName=[path][name][local][hash:base64:5]路径|文件名|样式名|编码截取
				//实现less模块化
				loader: "raw-loader!postcss-loader!less-loader"
			},
			{
				test: /\.less$/,
				//modules&localIdentName=[path][name][local][hash:base64:5]路径|文件名|样式名|编码截取
				//实现less模块化
				loader: "style-loader!css-loader!postcss-loader!less-loader"
			},	
			{
				
				test: /\.html$/,
				loader: 'vue-html'
			},
			{
				test: /\.md/,
				loader: 'vue-markdown',
			},
			{
				
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
				}
			},{
				//文件加载器，处理文件静态资源
				//name: 打包后文件名称
				//publicPath: 打包后文件绝对路径
				//文件输出地址按name属性来决定
				test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=/static/fonts/[name].[ext]'
			}
		]
	},
	postcss: function() {

		return [ autoprefix() ]
	},
	vue: {

		loaders: {

			less: 'vue-style-loader!css-loader!postcss-loader!less-loader'
		}
	},
	vueMarkdown: {

		use: [

			require('markdown-it-classy')
		]
	},
	watch: true,
	devtool: '#eval-source-map',
	plugins: [

    	new webpack.ResolverPlugin([
    		new DirectoryNameAsMain()
    	]),
    	//将jquery作为全局导出，使模块可以任意调用
    	new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
		new webpack.optimize.CommonsChunkPlugin({

			name: 'vendor'
		}),
    	new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin()
    ]
}

