<!--
 * @Author: tix
 * @Date: 2020-05-09 10:10:59
 * @LastEditTime: 2020-04-25 18:06:02
 * @LastEditors: tix
 * @Description: content and three card
 * @FilePath: \egg\app\web\page\index\index.vue
 -->
<template>
	<layout :description="description" :keywords="keywords">
		<div class="content-wp clearfix">
			<div class="content-left clearfix">
				<div class="three-card clearfix">
					<div style="margin-left: 0px;"><a href="" title="后台模板管理"><img src="@web/asset/images/index/1.jpg" alt=""></a></div>
					<div><a href="" title="web常用开发工具"><img src="@web/asset/images/index/2.jpg" alt=""></a></div>
					<div><a href="" title="素材合集"><img src="@web/asset/images/index/3.jpg" alt=""></a></div>
				</div>
				<AticleList></AticleList>
			</div>
			<div class="content-right">
				<Introduction></Introduction>
				<JoinUs></JoinUs>
				<PersonNumber></PersonNumber>
			</div>
		</div>
	</layout>
</template>
<script type="text/babel">
import AticleList from './component/articleList';
import Introduction from './component/introduction';
import JoinUs from './component/joinUs';
import PersonNumber from './component/personNumber';
export default {
	components: {
		AticleList,
		Introduction,
		JoinUs,
		PersonNumber,
	},
	data() {
		return {

		}
	},
	computed: {},
	hook: {},
	mounted() {}
};
</script>
<style lang="less" scoped>
.content-wp{
	width: 1200px;
	margin: 0 auto;
	.content-left {
		width: 70%;
		float: left;
		.three-card {
			width: 100%;
			>div {
				width: 30%;
				margin: 11px;
				float: left;
				>a {
					display: inline-block;
					width: 100%;
					img {
						width: 100%;
						height: 100%;
						border-radius: 5px;
					}
				}
			}
		}
	}
	.content-right {
		width: 30%;
		float: right;
		margin-top: 10px;
	}
}
</style>
