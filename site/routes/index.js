/**
 * 主页入口
 * @type {[type]}
 */
var express = require('express')
var router = express.Router()

module.exports = function(title, port) {

	return router.use(function(req, res, next) {
			
			res.render('index', { 
				
				title,
				port
			});
		})
}
