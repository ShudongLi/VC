import Vue from 'vue'
import VueRouter from 'vue-router'
import VueComponent from 'vcomponent'

import { type } from './js/utils'
import config from './comp.conf'
import app from './app'
import homePage from './js/page/home'
import compPage from './js/page/component'
import errorPage from './js/page/error'

function mapComp(conf) {

	let result = {}

	conf.forEach(item => {

		if(type(item.children) == 'array') {

			item.children.forEach(comp => {

				if(!comp.name) {

					throw Error('组件的name属性不能为空')
				}

				if(comp.url) {

					result[comp.url] = {

						name: comp.name,
						component: comp.component
					}
				}
			})
		}
	})

	return result
}

const BASE_URL = '/vc'

Vue.use(VueRouter)
Vue.use(VueComponent)

let router = new VueRouter({

	hashbang: true,
	history: false,
	abstract: false,
	root: BASE_URL
})

router.redirect({

	'*': '/'
})

router.map({

	'/': {

		name: 'home',
		component: homePage
	},

	'/component': {

		name: 'component',
		component: compPage,
		subRoutes: {

			'': {

				name: 'home',
				component: homePage
			},
			...mapComp(config)
		}
	},

	'*': {

		name: 'error',
		component: errorPage
	}
})

router.start({

	components: {

		app
	}
}, 'body')
