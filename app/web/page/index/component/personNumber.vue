<!--
 * @Author: tix
 * @Date: 2020-05-13 22:03:00
 * @LastEditTime: 
 * @LastEditors: tix
 * @Description: joinus
 * @FilePath: \egg\app\web\page\index\component\personNumber.vue
 -->
<template>
  <div class="personNumber-wp">
    <div>
      <div class="card update-number">
        <div class="center">
          <div class="center-title">
            <span>2,476</span>
          </div>
          <div class="center-update">
            <div class="center-update-num">+0</div>
            <div>上一周新增</div>
          </div>
          <div class="center-right">
            <i class="iconfont iconrightdirection"></i>
          </div>
        </div>
        <div class="down">
          <p>小步快跑，每日更新！</p>
        </div>
      </div>
      <div class="card update-number user">
        <div class="center">
          <div class="center-title">
            <span>1,304</span>
          </div>
          <div class="center-update">
            <div class="center-update-num">+385</div>
            <div>小可爱😀</div>
          </div>
          <div class="center-right">
            <i class="iconfont iconrightdirection"></i>
          </div>
        </div>
        <div class="down">
          <p>小可爱注册加入！</p>
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
.personNumber-wp {
  .update-number {
    background: linear-gradient(135deg,rgba(71,114,217,.92),rgba(0,220,175,.92)),url(./img/mdbg.svg) no-repeat 50%;
    position: relative;
    border-radius: 6px;
    color: #282828;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    min-width: 0;
    height: 120px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px;
    font-family: Montserrat,sans-serif;
    .center {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      width: 100%;
      line-height: 1;
      position: relative;
      z-index: 999;
      .center-title {
        font-size: 42px;
        font-weight: 600;
        letter-spacing: -.015em;
        display: block;
        color: #fff;
        -webkit-transition: all .25s ease-in-out;
        transition: all .25s ease-in-out;
      }
    }
    .center-update {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      >div {
        margin-left: 5px;
        color: #bbe6dc;
      }
    }
    .center-update-num {
      font-weight: 600;
      font-size: 16x;
      letter-spacing: 3px;
      color: #14dab5!important;
    }
    .center-right {
      i {
        color: #bbe6dc;
      }
    }
  }
  .update-number.user {
    background: linear-gradient(135deg,rgba(109,71,217,.92),rgba(249,61,102,.92)),url(./img/mdbg.svg);
  }
}
</style>