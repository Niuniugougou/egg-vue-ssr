<!--
 * @Author: tix
 * @Date: 2020-05-13 16:20:59
 * @LastEditTime: 
 * @LastEditors: tix
 * @Description: content and three card
 * @FilePath: \egg\app\web\page\index\component\introduction.vue
 -->
<template>
  <div class="introduction-wp">
    <div class="card">
      <div class="join">
        <div class="j-h">
          <img src="@web/asset/images/tix.png" alt/>
          <strong>tix社区</strong>
        </div>
        <div class="j-c">
          <p>
            tix是一个专注前端开发、网址导航、社区讨论、学习视频下载、HTML5、CSS3、JavaScript、egg的独立分享导航综合网站
            <a href="" class="">关于我们</a>
          </p>
        </div>
        <div class="j-f">
          <a href="">加入我们</a>
          <a href="">发你知道的</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  hook: {},
  components: {},
  data() {
    return {

    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.introduction-wp {
  width: 100%;
  .card {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    min-height: 30px;
    height: 100%;
    position: relative;
    margin-bottom: 20px;
    min-height: 100px;
    border-top: 2px solid #69bdff;
    .join {
      width: 100%;
      .j-h {
        border: none;
        background: none;
        margin: 0;
        padding: 15px 10px;
        -webkit-box-shadow: none;
        box-shadow: none;
        font-size: 16px;
        border-radius: 0;
        color: #777;
        border-bottom: 1px solid rgba(34,36,38,.1);
        position: relative;
        img{
          width: 70px;
        }
        strong {
          position: absolute;
          top: 24px;
          left: 88px;
        }
      }
      .j-c {
        padding: 10px 15px 18px;
        font-size: 13px;
        color: #636b6f;
        line-height: 24px;
        p {
          a {
            color: #ccc;
          }
        }
      }
      .j-f {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        padding: 15px 10px;
        border-top: 1px solid rgba(0,0,0,.05);
        a {
          display: inline-block;
          text-align: center;
          padding: 10px 30px;
          border: 1px solid rgba(0,0,0,.05);
          border-radius: 5px;
          color: #000;
        }
        a:hover {
          color: #fb3;
        }
      }
    }
  }
}
</style>