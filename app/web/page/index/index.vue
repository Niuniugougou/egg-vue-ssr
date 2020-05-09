<!--
 * @Author: tix
 * @Date: 2020-05-09 10:10:59
 * @LastEditTime: 2020-04-25 18:06:02
 * @LastEditors: tix
 * @Description: content and three card
 * @FilePath: \egg\app\web\page\index\index.vue
 -->
<template>
	<layout :description="description" :keywords="keywords" title="标题">
		<div class="content-wp clearfix">
			<div class="content-left">
				<div class="three-card">
					<div><a href=""><img src="@web/asset/images/index/1.jpg" alt=""></a></div>
					<div><a href=""><img src="@web/asset/images/index/2.jpg" alt=""></a></div>
					<div><a href=""><img src="@web/asset/images/index/3.jpg" alt=""></a></div>
				</div>
			</div>
			<div class="content-right">

			</div>
		</div>
	</layout>
</template>
<script type="text/babel">
export default {
	components: {},
  	computed: {},
  	hook: {},
  	mounted() {
		
	  }
};
</script>
<style lang="less" scoped>
.content-wp{
	width: 1200px;
	margin: 0 auto;
	.content-left {
		width: 70%;
		float: left;
	}
}
</style>
