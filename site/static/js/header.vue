<template>
	
	<header class="vc-header">
		
		<div class="container vc-wrapper">
			
			<div class="vc-header-logo">
				
				<a href="#"><h2>VC</h2></a>
				
			</div>

			<nav class="vc-header-nav">
				
				<ul>
					
					<li class="vc-nav-item">
						<a href="#component">组件</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>

</template>

<script>
	
</script>

<style lang="less">
	
	@import '../css/mixins/a-reset';
	@import '../css/variables';

	.vc-header {

		width: 100%;
		height: @header-height;
		background-color: @vue-color;
		position: absolute;
		top: 0;

		.vc-header-logo, .vc-header-nav {

			height: @header-height;
		}

		.vc-header-logo {

			float: left;

			a {

				.a-reset(#35495e, #35495e);
			}
		}

		.vc-header-nav {
			
			float: right;

			ul {

				height: @header-height;
				line-height: @header-height;

				.vc-nav-item {

					a {
						
						font-size: 18px;
						padding: 0 @base-space;
						display: block;
						.a-reset(#35495e, #000)
					}
				}
			}
		}
	}
</style>
