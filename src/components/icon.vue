<template>
	
	<i :class="faClass"></i>
</template>

<script>

	import { VC_CLASS_SEPARATOR } from 'vconstant'
	
	const fa = 'fa'

	function parseFa(prop) {

		if(prop.indexOf(fa) === 0 || prop === '') {

			return prop
		}

		return fa + VC_CLASS_SEPARATOR + prop
	}

	export default {

		name: 'vc-icon',

		props: {

			'vc-name': {

				required: true,
				type: String
			},

			'vc-size': {

				type: String,
				default: ''
			}
		},

		computed: {

			faClass() {

				return [ fa, 
				parseFa(this.vcName), 
				parseFa(this.vcSize) 
				]
			}
		}
	}
</script>

<style lang="less">
	
</style>
