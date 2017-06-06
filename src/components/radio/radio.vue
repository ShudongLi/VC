<template>
	
	<label class="vc-radio">

		<span class="vc-radio-input" :class="radioClass">
			
			<input type="radio" class="vc-radio-original" 
				v-model="vcModel"
				:value="vcValue" 
				:disabled="disabled"
			>
			<span class="vc-radio-inner"></span>
		</span><span><slot></slot></span>
	</label>

</template>

<script>

	export default {

		name: 'vc-radio',

		props: {

			'vc-value': null,
			'vc-model': null,
			value: null,
			disabled: {

				type: Boolean,
				default: false
			}
		},

		computed: {

			radioClass() {

				let classes = []

				if(this.vcValue === this.vcModel) {

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

				this.$emit('radio.change', val)
			}
		}
	}
	
</script>

<style src="./radio.less" lang="less"></style>
