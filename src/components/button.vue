<template>
	
	<button class="vc-button" :class="btnClass" :disabled="disabled">
		
		<vc-icon :vc-name="vcIcon" v-if="vcIcon"></vc-icon>
		<slot></slot>
	</button>

</template>

<script>

	import { getClassPrefix } from 'vcutils'
	import mixins from '../mixins'

	import icon from './icon'

	const prefix = getClassPrefix('button')
	
	export default {

		name: 'vc-button',

		mixins: [...mixins],

		components: {

			vcIcon: icon
		},

		props:{

			'vc-type': {

				type: String,
				default: ''
			},

			'vc-size': {

				type: String,
				default: ''
			},

			'disabled': {

				type: Boolean,
				default: false
			},

			'vc-icon': {

				type: String
			},

			'vc-circle': null
		},

		computed: {

			btnClass() {

				let classes = []

				if(this.vcType) {

					classes.push(prefix + this.vcType)
				}

				if(this.vcSize) {

					classes.push(prefix + this.vcSize)
				}

				if(this.disabled || this.disabled === '') {

					classes.push('disabled')
				}

				if(this.vcCircle || this.vcCircle === '') {

					classes.push(prefix + 'circle')
				} 

				return classes
			}
		}
	}

</script>

<style src="vcless/button" lang="less"></style>
