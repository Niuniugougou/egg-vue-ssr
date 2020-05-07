<!--
 * @Author: your name
 * @Date: 2020-04-19 18:58:03
 * @LastEditTime: 2020-05-7 23:23:19
 * @LastEditors: tix
 * @Description: 导航
 * @FilePath: \egg\app\web\component\header\idnex.vue
 -->
<template>
  <header class="header">
    <div class="wp">
      <div class="container-wp">
        <div class="header-main">
          <div class="logo">
            <img src="@web/asset/images/logo.png" />
          </div>
          <!-- <div class="search">
            <input type="text" placeholder="输入网址或者相关描述检索" />
          </div> -->
          <div class="minapp">
            <div class="menu">
              <ul>
                <li><a title="首页" href="http://localhost:7001/" class="active">首页</a></li>
                <li><a title="文章" href class>文章</a></li>
                <li><a title="导航" href class>导航</a></li>
                <li><a title="排行" href class>排行</a></li>
                <li><a title="学习" href class>学习</a></li>
                <li><a title="源码" href class>源码</a></li>
                <li><a title="社区" href class>社区</a></li>
                <li class="last">
                  <span></span>
                  <span></span>
                  <span></span>
                  <div class="nav-div">
                    <nav class="nav">
                      <div>
                        <a target="_blank" href="">常见问题</a>
                      </div>
                      <div>
                        <a href="">规范</a>
                      </div>
                      <div>
                        <a href="">关于我们</a>
                      </div>
                    </nav>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script type="text/babel">
export default {
  components: {},
  computed: {},
  hook: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.header {
  background-color: #ffffff;
  .container-wp {
    border-radius: 5px;
    // overflow: hidden;
    margin: 0 auto;
    text-align: center;
    width: 1200px;
  }
  &-main {
    background-color: #ffffff;
    padding: 0 10px;
    height: 60px;
    display: flex;
    align-items: center;
    .logo {
      height: 60px;
      width: 220px;
      border-right: 1px solid #f6f8fa;
      display: flex;
      align-items: center;
      img {
        height: 60px;
      }
    }
    .search {
      padding-left: 20px;
      width: 40%;
      input {
        height: 60px;
        border: none;
        width: 100%;
        display: block;
      }
      input::-webkit-input-placeholder {
        color: #aab2bd;
        font-size: 16px;
      }
    }
    .minapp {
        .menu {
            li {
                float: left;
                >a {
                    line-height: 60px;
                    margin: 0 20px 0 20px;
                    color: black;
                    font-size: 14px;
                    cursor: pointer;
                }
                >a:hover {
                    color: #6190E8;
                }
            }
            li.last {
                position: relative;
                margin-top: 18px;
                cursor: pointer;
                height: 42px;
                >span {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    display: inline-block;
                    line-height: 60px;
                    margin-right: 4px;
                    background-color: #8590a6;
                    z-index: 102;
                }
                .nav-div {
                    .nav {
                        position: absolute;
                        opacity: 1;
                        display: block;
                        top: 100%;
                        left: 0;
                        z-index: 101;
                        min-width: 160px;
                        width: 160px;
                        padding: 5px 0;
                        margin: 0;
                        list-style: none;
                        font-size: 14px;
                        text-align: left;
                        background-color: #fff;
                        border-top: 0;
                        -webkit-transition: all .5s;
                        transition: all .5s;
                        background-clip: padding-box;
                        border-bottom-right-radius: 3px;
                        border-bottom-left-radius: 3px;
                        -webkit-box-shadow: 0 1px 7px 0 rgba(0,0,0,.2);
                        box-shadow: 0 1px 7px 0 rgba(0,0,0,.2);
                    }
                }
            }
        }
    }
  }
}
</style>
