<!--
 * @Author: tix
 * @Date: 2020-05-13 17:20:59
 * @LastEditTime: 
 * @LastEditors: tix
 * @Description: joinus
 * @FilePath: \egg\app\web\page\index\component\joinus.vue
 -->
<template>
  <div class="join-wp">
    <div class="tix-join">
      <div class="tix-join-contet card">
        <div class="tix-join-contet-center">
          <a href="https://www.tix.com/weixin.html" target="_blank" class="weixin">
            <i class="iconfont iocnweixin"></i>
            <span>加入我们</span>
          </a>
          <a class="weibo">
            <i class="iconfont iocnweibo"></i>
            <span>分享到微博</span>
          </a>
        </div>
      </div>
    </div>
    <div class="card tix-weixin" style>
      <img src="https://www.vipbic.com/public/www/pc/img/7.cc9a928e.png" alt />
      <div class="tix-weixin-des">
        <h3>tix-分享你我快乐</h3>
        <p>帮助设计开发者寻找互联网优秀的资源和工具</p>
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
}
.join-wp {
  .tix-join {
    .tix-join-contet {
      height: 45px;
      min-height: 45px;
      .tix-join-contet-center {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 45px;
        -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
        justify-content: space-evenly;
        .weixin {
          color: #4ad422;
          span {
            font-weight: 600;
            font-size: 14px;
          }
        }
        .weibo {
          color: #f24647;
          span {
            font-weight: 600;
            font-size: 14px;
          }
        }
      }
    }
  }
  .tix-weixin {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 5px 10px;
    height: 80px;
    min-height: 80px;
    img {
      width: 70px;
      height: 70px;
    }
    .tix-weixin-des {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
      justify-content: space-evenly;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-left: 5px;
      h3 {
        font-size: 16px;
        font-weight: 600;
        color: #333;
      }
      p {
        font-size: 12px;
        color: #909090;
      }
    }
  }
}
</style>