import radioGroup from './radioGroup'

radioGroup.install = function(Vue) {

	if(!radioGroup.name) {

		throw Error('The name attribute is required')
	}

	Vue.component(radioGroup.name, radioGroup)
}

export default radioGroup
