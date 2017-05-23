<template>
	
	<div class="vc-container">
		
		<app-main>
			
			<router-view></router-view>
		</app-main>
	</div>

</template>

<script>
	
	import appMain from '../components/main'

	export default {

		components: {

			appMain
		}
	}
</script>

<style lang="less">
	
	@import '../../css/variables';

	.vc-container {
		
		height: 100%;
		padding: 2 * @base-space 0;
		overflow: auto;
	}
</style>
