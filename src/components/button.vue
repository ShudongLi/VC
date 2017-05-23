<template>
	
	<button class="vc-button" :class="btnClass" :disabled="disabled">
		
		<vc-icon :vc-name="vcIcon" v-if="vcIcon"></vc-icon>
		<slot></slot>
	</button>

</template>

<script>

	import { VC_NAMESPACE, VC_CLASS_SEPARATOR } from 'vconstant'
	import mixins from '../mixins'

	import icon from './icon'

	const prefix = VC_NAMESPACE + VC_CLASS_SEPARATOR + 'button' + VC_CLASS_SEPARATOR
	
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

			'vc-disabled': {

				type: Boolean,
				default: false
			},

			'vc-icon': {

				type: String
			},

			'vc-circle': null
		},

		computed: {

			disabled() {

				if(this.vcDisabled || this.vcDisabled === '') {

					return 'disabled'
				}
			},

			btnClass() {

				let classes = []

				if(this.vcType) {

					classes.push(prefix + this.vcType)
				}

				if(this.vcSize) {

					classes.push(prefix + this.vcSize)
				}

				if(this.vcDisabled || this.vcDisabled === '') {

					classes.push(prefix + 'disabled')
				}

				if(this.vcCircle || this.vcCircle === '') {

					classes.push(prefix + 'circle')
				} 

				return classes
			}
		},

		methods: {

			alert() {

				alert('哈哈')
			}
		}
	}

</script>

<style src="vcless/button" lang="less"></style>
