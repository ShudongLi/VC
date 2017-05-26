<template>

	<div class="vc-input" :class="inputClass">
		
		<vc-icon class="vc-input-icon" :vc-name="vcIcon" v-if="vcIcon" @click.native="click"></vc-icon>
		<input type="text" class="vc-input-original" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" v-model="vcModel">
	</div>
	
</template>

<script>

	import icon from './icon'
	
	export default {

		props: {

			'vc-model': null,
			'vc-icon': String,
			value: null,
			placeholder: String,
			disabled: {

				type: Boolean,
				default: false
			},
			readonly: {

				type: Boolean,
				default: false
			},
		},

		computed: {

			inputClass() {

				let classes = []

				if(this.classes) {

					classes.push('disabled')
				}

				return classes
			}
		},

		components: {

			vcIcon: icon
		},

		methods: {

			click() {

				this.$emit('icon.click')
			},
		}
	}

</script>

<style src="vcless/input" lang="less"></style>
