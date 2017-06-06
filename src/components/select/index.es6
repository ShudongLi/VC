import select from './select'

select.install = function(Vue) {

	if(!select.name) {

		throw Error('The name attribute is required')
	}

	Vue.component(select.name, select)
}

export default select
