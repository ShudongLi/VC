<template>

	<label class="vc-checkbox">

		<span class="vc-checkbox-input" :class="checkboxClass">

			<span class="vc-checkbox-inner"></span>
			<input type="checkbox" class="vc-checkbox-original" :value="vcValue" v-model="vcModel" :disabled="disabled">
		</span><span><slot></slot></span>
	</label>

</template>

<script>

	import { typeis, contains } from 'vcutils'
	
	export default {

		props: {

			'vc-value': null,
			'vc-model': [ Boolean, Array ],
			'disabled': {

				type: Boolean,
				default: false
			}
		},

		computed: {

			checkboxClass() {

				let classes = []

				if((typeis(this.vcModel) === 'boolean' && this.vcModel)
					|| (typeis(this.vcModel) === 'array' && contains(this.vcModel, this.vcValue))) {

					classes.push('is-active')
				}

				if(this.disabled || this.disabled === '') {

					classes.push('disabled')
				}

				return classes
			}
		},

		watch: {

			vcModel(val) {

				this.$emit('checkbox.change', val)
			}
		}
	}

</script>

<style src="vcless/checkbox" lang="less"></style>
