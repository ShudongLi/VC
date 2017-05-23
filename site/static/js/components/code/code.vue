<template>

	<div class="vc-code">
		<slot></slot>
		<div class="vc-code-clipboard">
			
			<vc-icon vc-name="clipboard" vc-size="lg"></vc-icon>
		</div>
	</div>
	
</template>

<script>
	
	import Clipboard from 'clipboard'
	import hlcss from 'highlightcss'
	import hljs from 'highlightjs'

	import { icon } from 'vcomponent'

	export default {

		data() {

			return {

				code: null
			}
		},

		components: {

			vcIcon: icon
		},

		ready() {

			let that = this

			let clipBtn = this.$el.querySelector('.vc-code-clipboard') 

			//初始化highlightjs
			hljs.highlightBlock(this.$el.querySelector('pre code'))
			//初始化Clipboardjs
			new Clipboard(clipBtn, {

				text: function() {

					return that.$el.querySelector('pre code').innerText
				}
			})
		}
	}

</script>

<style lang="less">
	
	@import '../../../css/variables';

	.vc-code {

		position: relative;

		.vc-code-clipboard {
			
			cursor: pointer;
			position: absolute;
			top: -@base-space;
			right: -@base-space;

			&:hover {

				color: #000
			}
		}
	}
</style>
