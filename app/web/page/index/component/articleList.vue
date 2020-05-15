<template>
  <div class="container-article-wp">
    <div class="container-article">
      <article class="item_body" v-for="item in lists" :key="item.id">
        <a
          :href="item.url"
          :title="item.title"
          class="item"
        >
          <div class="post-card">
            <div class="blog-background"><img :src="item.img_url" lazy="loaded" :alt="item.title"></div>
            <div class="post-card-mask">
              <div class="post-card-container">
                <h2 class="post-card-title">{{item.title}}</h2>
                <div class="post-card-info">
                  <span>{{item.author}}</span>
                  <span>{{item.create_time}}・</span>
                  <span>{{item.articleType}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="original">
            <span>{{item.writeType}}</span>
          </div>
        </a>
      </article>
    </div>
    <div style="text-align:center" v-if="isLoading">
      <img src="@web/asset/images/loading.gif" />
    </div>
    <div style="text-align:center">

    </div>
  </div>
</template>
<script type="text/babel">
export default {
  hook: {},
  components: {},
  data() {
    return {
      isFinish: false,
      isLoading: false,
      pageIndex: 1,
      pageSize: 10,
      list: []
    };
  },
  computed: {
    lists() {
      return this.list;
    }
  },
  methods: {
    fetch() {
      this.$request
        .get(`/list?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`)
        .then(res => {
          if (res.data.list && res.data.list.length) {
            this.total = res.data.total;
            this.list = this.list.concat(res.data.list);
          } else {
            this.isFinish = true;
          }
          this.isLoading = false;
        });
    },
    loadPage() {
      if (!this.isFinish && !this.isLoading) {
        this.isLoading = true;
        this.pageIndex++;
        setTimeout(() => {
          this.fetch();
        }, 2000);
      }
    },

  },
  mounted() {
    this.loadPage();
    window.addEventListener(
      "scroll",
      () => {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        //变量windowHeight是可视区的高度
        let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //滚动条到底部的条件
        if(scrollTop+windowHeight==scrollHeight){
            //写后台加载数据的函数
            this.loadPage();
            console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
        }
      },
      false
    );
  }
};
</script>
<style lang="less" scoped>
.container-article-wp {
  width: 800px;
  height: 250px;
  .container-article {
    height: 100%;
    article {
      height: 100%;
      margin-bottom: 20px;
      .item {
        display: inline-block;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        .post-card {
          border-radius: 5px;
          overflow: hidden;
          background: #fff no-repeat 50%;
          background-size: cover;
          position: absolute;
          -webkit-transition: all .3s ease;
          transition: all .3s ease;
          width: 100%;
          height: 100%;
          .blog-background {
            display: block;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
            position: absolute;
            left: 0;
            top: 0;
            overflow: hidden;
            opacity: 1;
            -webkit-transition: opacity 1s ease;
            transition: opacity 1s ease;
          }
          .post-card-mask {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0.2;
            background: #000;
            .post-card-container {
              width: 100%;
              height: 100%;
              text-align: center;
              color: #fff;
              .post-card-title,.post-card-info {
                color: #fff;
                font-size: 20px;
                padding: 50px 0 0 0;
              }
            }
          }
        }
        .post-card:hover {
          transform: scale(1.01);
        }
        .original {
          position: absolute;
          top: 4px;
          right: -20px;
          display: inline-block;
          width: 70px;
          height: 24px;
          background: #fb9f73;
          line-height: 24px;
          color: #fff;
          text-align: center;
          transform: rotate(45deg);
          >span {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>