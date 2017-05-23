<template>
	
	<main class="vc-doc">
			
		<slot></slot>
	</main>

</template>

<script>
	
</script>

<style lang="less">
	
	@import '../../../css/variables';

	@table-cell-padding: 8px;
	@table-thead-bg: #f7f7f7;
	@table-border-color: #ddd;

	.vc-doc {

		border-left: 1px solid #eee;
		padding-left: 2 * @base-space;

		h2, h3 {

			color: #000;
		}
		
		h3 {

			margin: 3 * @base-space 0 @base-space 0;
		}

		p {

			margin: 5px 0;
		}

		> section > table {

			width: 100%;
			max-width: 100%;
			margin-bottom: 2 * @base-space;
			border: 1px solid #ccc;

			> thead,
			> tbody,
			> tfoot {
				> tr {
					> th,
					> td {
						padding: @table-cell-padding;
				        line-height: @line-height-base;
				        vertical-align: top;
						border: 1px solid #ccc;
					}
					}
				}
			> thead > tr {
				> th,
				> td {
					background-color: @table-thead-bg;
					border-bottom-width: 2px;
				}
			}
		}
	}
</style>
