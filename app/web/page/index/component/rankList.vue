<!--
 * @Author: tix
 * @Date: 2020-05-14 14:30:16
 * @LastEditTime: 
 * @LastEditors: tix
 * @Description: 首页右下角的排行榜
 * @FilePath: \egg\app\web\page\index\component\rankList.vue
 -->
<template>
  <div class="ranklist-wp">
    <div class="card">
      <div class="title">
        <h3>排行榜</h3>
      </div>
      <div class="b-htc">
        <ul class="text-list dayhot">
          <li class="text-overflow">
            <span class="text-list-num">1</span>
            <a
              href="https://www.vipbic.com/navdet.html?id=1006"
              target="_blank"
              title="用完即走，触手可及！..."
            >用完即走，触手可及！...</a>
            <span class="man-time">2152人在看</span>
          </li>
          <li class="text-overflow">
            <span class="text-list-num">2</span>
            <a
              href="https://www.vipbic.com/navdet.html?id=65"
              target="_blank"
              title="照片,摄影师,摄影作品集,在线摄影作品集,照片精选,网络摄影..."
            >照片,摄影师,摄影作品集,在线摄影作品集,照片精选,网络摄影...</a>
            <span class="man-time">1149人在看</span>
          </li>
          <li class="text-overflow">
            <span class="text-list-num">3</span>
            <a
              href="https://www.vipbic.com/navdet.html?id=20"
              target="_blank"
              title="一套基于 Vue.js 的高质量 UI 组件库..."
            >一套基于 Vue.js 的高质量 UI 组件库...</a>
            <span class="man-time">994人在看</span>
          </li>
          <li class="text-overflow">
            <span class="text-list-num">4</span>
            <a
              href="https://www.vipbic.com/navdet.html?id=102"
              target="_blank"
              title="您可以在30秒或更短的时间内弄懂的有用CSS代码片段的精选。..."
            >您可以在30秒或更短的时间内弄懂的有用CSS代码片段的精选。...</a>
            <span class="man-time">820人在看</span>
          </li>
          <li class="text-overflow">
            <span class="text-list-num">5</span>
            <a
              href="https://www.vipbic.com/thread.html?id=57"
              target="_blank"
              title="ThinkPHP5中如何操作单个字段..."
            >ThinkPHP5中如何操作单个字段...</a>
            <span class="man-time">98人在看</span>
          </li>
          <li class="text-overflow">
            <span class="text-list-num">6</span>
            <a
              href="https://www.vipbic.com/thread.html?id=49"
              target="_blank"
              title="关于addRoutes、axios动态添加路由..."
            >关于addRoutes、axios动态添加路由...</a>
            <span class="man-time">97人在看</span>
          </li>
          <li class="text-overflow">
            <span class="text-list-num">7</span>
            <a
              href="https://www.vipbic.com/thread.html?id=88"
              target="_blank"
              title="在vscode中使用别名@按住ctrl也能跳转对应路径..."
            >在vscode中使用别名@按住ctrl也能跳转对应路径...</a>
            <span class="man-time">91人在看</span>
          </li>
          <li class="text-overflow">
            <span class="text-list-num">8</span>
            <a
              href="https://www.vipbic.com/bigdet.html?id=114"
              target="_blank"
              title="UI设计全能班..."
            >UI设计全能班...</a>
            <span class="man-time">人在看</span>
          </li>
          <li class="text-overflow">
            <span class="text-list-num">9</span>
            <a
              href="https://www.vipbic.com/bigdet.html?id=21"
              target="_blank"
              title="PHP高性能 高价值的PHP API..."
            >PHP高性能 高价值的PHP API...</a>
            <span class="man-time">人在看</span>
          </li>
          <li class="text-overflow">
            <span class="text-list-num">10</span>
            <a
              href="https://www.vipbic.com/bigdet.html?id=100"
              target="_blank"
              title="JavaScript数据结构与算法..."
            >JavaScript数据结构与算法...</a>
            <span class="man-time">人在看</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  hook: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.card {
  background: #fff;
  border-radius: 10px;
  min-height: 30px;
  height: 100%;
  position: relative;
  margin-bottom: 20px;
  min-height: 100px;
  padding: 5px 0 15px 0;
}
.ranklist-wp {
  .card {
    .title {
      position: relative;
      text-indent: 18px;
      font-size: 17px;
      border-bottom: 1px solid #f6f6f6;
      padding: 2px 20px!important;
      .h3 {
        line-height: 40px;
        font-size: 14px;
        font-weight: 700;
        position: relative;
      }
      .h3::before {
        content: " ";
        position: absolute;
        left: 0;
        top: 11px;
        height: 18px;
        width: 3px;
        background: #ffe000;
      }
    }
    .b-htc {
      padding: 0 15px;
      .text-list{
        li {
          line-height: 20px;
          padding: 12px 0;
          border-bottom: 1px dotted #eaeaea;
          list-style: inside disc;
          position: relative;
          max-width: 100%;
          display: block;
          overflow: hidden;
          a {
            display: inline-block;
            width: 66%;
            overflow: hidden;
            word-break: break-all;
            word-wrap: normal;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .text-list-num {
            display: inline-block;
            width: 16px;
            height: 16px;
            line-height: 16px;
            vertical-align: top;
            margin-top: 2px;
            text-align: center;
            margin-right: 10px;
            font-size: 12px;
            border-radius: 40px;
            background-color: #819cb9;
            color: #fff;
          }
          .man-time {
            float: right;
            color: #8c8c8c;
          }
        }
        li:first-child .text-list-num {
          background-color: #f63;
        }
        li:nth-child(2) .text-list-num {
          background-color: #fb3;
        }
        li:nth-child(3) .text-list-num {
          background-color: #9c0;
        }
      }
    }
  }
}
</style>