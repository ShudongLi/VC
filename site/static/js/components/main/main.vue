<template>

	<div class="container vc-content">
		
		<app-aside class="col-md-3"></app-aside>
		<app-doc class="col-md-9">
			
			<slot></slot>
		</app-doc>
	</div>

</template>

<script>

	import appAside from '../aside'
	import appDoc from '../doc'
	
	export default {

		methods: {

			registryDocs(docName) {

			}
		},

		components: {

			appAside,
			appDoc
		}
	}
</script>

<style lang="less">

	@import '../../../css/variables';

	.vc-content {

		color: @main-color;
		padding: 2 * @base-space @base-space;
		border-radius: 6px;
		box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
		background-color: @doc-bg-color;
	}
</style>
