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
            <div class="blog-background"><img src="@web/asset/images/index/4.jpg" alt=""></div>
            <div class="post-card-mask">
              <div class="post-card-container">
                <h2 class="post-card-title">{{item.title}}</h2>
                <div class="post-card-info">
                  <span>{{item.author}}</span>
                  <span>{{item.date}}・</span>
                  <span>{{item.articleType}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="original">
            <img src=""/>
          </div>
        </a>
      </article>
    </div>
    <div style="text-align:center" v-if="isLoading">
      <img src="@web/asset/images/loading.gif" />
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
        }, 1500);
      }
    }
  },
  mounted() {
    this.loadPage();
    window.addEventListener(
      "scroll",
      () => {
        this.loadPage();
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
      }
    }
  }
}
</style>