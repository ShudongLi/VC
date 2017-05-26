<template>
	
	<label class="vc-radio">

		<span class="vc-radio-input" :class="radioClass">

			<span class="vc-radio-inner"></span>
			<input type="radio" class="vc-radio-original" :value="vcValue" v-model="vcModel" :disabled="disabled">
		</span><span><slot></slot></span>
	</label>

</template>

<script>

	export default {

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

<style src="vcless/radio" lang="less"></style>
