// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [

      'test/**/*.js',
      'test/**/*.es6'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

        'test/**/*.js': ['webpack'],
        'test/**/*.es6': ['webpack']
    },

    webpack: {

        module: {
        	
            preLoaders: [

				{

					test: /\.(vue|es6)$/,
					exclude: /(node_modules|test)/,
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
					
					test: /\.(js|es6)$/,
					exclude: /node_modules/,
					loader: 'babel'
				},
				{
					
					test: /\.json$/,
					loader: 'json'
				},
				{
					
					test: /\.html$/,
					loader: 'vue-html'
				},
				{
					test: /\.md/,
					loader: 'vue-markdown'
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

        resolve: {

            alias: _alias,
            extensions: ['', '.vue', '.js', '.es6', '.json', '.less', '.html', '.md']
        },

        resolveLoader: {

            root: path.join(__dirname, 'node_modules'),
        }

    },

    webpackMiddleware: {

        noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
        'karma-mocha',
        'karma-webpack',
        'karma-chrome-launcher',
        'karma-mocha-reporter'
    ]
  })
}
